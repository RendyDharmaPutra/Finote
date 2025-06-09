import { FormDialogContainer } from '@/components/form/form-dialog-container';
import { TextField } from '@/components/form/text-field';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';
import { RouteName } from 'vendor/tightenco/ziggy/src/js';

type BalanceFormDialogProps = {
    title: string;
    action: RouteName;
    method?: 'post' | 'put'; // default ke post
    open: boolean;
    setOpen: (value: boolean) => void;
    initialValues?: BalanceForm;
};

export const BalanceFormDialog: React.FC<BalanceFormDialogProps> = (props) => {
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<BalanceForm>>({
        id: 0,
        name: '',
        amount: '',
    });

    // Set Initial Values jika ada dari Props
    useEffect(() => {
        if (props.initialValues) {
            setData({
                id: props.initialValues.id ?? 0,
                name: props.initialValues.name,
                amount: props.initialValues.amount,
            });
        }
    }, [props.initialValues]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        const submitFn = props.method === 'put' ? put : post;
        const routeParams = props.method === 'put' ? { balance: props.initialValues?.id } : undefined;

        setData('amount', Number(data.amount)); // Convert ke Number sebelum diproses di Backend

        submitFn(route(props.action, routeParams), {
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
