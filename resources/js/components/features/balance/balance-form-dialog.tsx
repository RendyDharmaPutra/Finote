import { FormDialogContainer } from '@/components/form/form-dialog-container';
import { TextField } from '@/components/form/text-field';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { RouteName } from 'vendor/tightenco/ziggy/src/js';

type BalanceForm = {
    name: string;
    amount: string | number;
};

type BalanceFormDialogProps = {
    title: string;
    action: RouteName;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BalanceFormDialog: React.FC<BalanceFormDialogProps> = (props) => {
    const { data, setData, post, processing, errors, reset } = useForm<Required<BalanceForm>>({
        name: '',
        amount: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        setData('amount', Number(data.amount)); // Convert ke Number sebelum diproses di Backend

        post(route(props.action), {
            onSuccess: () => {
                reset();
                props.setOpen(false);
            },
            onError: (errors: unknown) => {
                console.error('Submission error:', errors);
            },
        });
    };

    return (
        <FormDialogContainer title={props.title} open={props.open} setOpen={props.setOpen} processing={processing} onSubmit={submit}>
            <div className="flex flex-col gap-5">
                <TextField
                    label="Nama Saldo"
                    name="name"
                    index={1}
                    placeholder="Contoh: Tabungan"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    message={errors.name}
                />
                <TextField
                    label="Jumlah Awal"
                    name="amount"
                    index={2}
                    type="number"
                    step={500}
                    min={0}
                    placeholder="0"
                    value={data.amount}
                    onChange={(e) => setData('amount', e.target.value)}
                    message={errors.amount}
                />
            </div>
        </FormDialogContainer>
    );
};
