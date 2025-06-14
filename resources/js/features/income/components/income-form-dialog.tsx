import { DateField } from '@/components/form/date-field';
import { FormDialogContainer } from '@/components/form/form-dialog-container';
import { SelectField } from '@/components/form/select-field';
import { TextField } from '@/components/form/text-field';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';
import { RouteName } from 'vendor/tightenco/ziggy/src/js';

type IncomeFormDialogProps = {
    title: string;
    action: RouteName;
    method?: 'post' | 'put'; // default ke post
    open: boolean;
    setOpen: (value: boolean) => void;
    initialValues?: Income;
};

export const IncomeFormDialog: React.FC<IncomeFormDialogProps> = (props) => {
    const { balances, categories } = usePage<IncomePageProps>().props;

    const { data, setData, post, put, processing, errors, reset } = useForm<Required<IncomeForm>>({
        id: 0,
        name: '',
        amount: '',
        time: new Date(),
        balance_id: '',
        category_id: '',
    });

    // Set Initial Values jika ada dari Props
    useEffect(() => {
        if (props.initialValues) {
            setData({
                id: props.initialValues.id ?? 0,
                name: props.initialValues.name,
                amount: props.initialValues.amount,
                time: props.initialValues.time,
                balance_id: props.initialValues.balance_id,
                category_id: props.initialValues.category_id,
            });
        }
    }, [props.initialValues]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        const submitFn = props.method === 'put' ? put : post;
        const routeParams = props.method === 'put' ? { Income: props.initialValues?.id } : undefined;

        setData('amount', Number(data.amount)); // Convert ke Number sebelum diproses di Backend
        setData('balance_id', Number(data.balance_id)); // Convert ke Number sebelum diproses di Backend
        setData('category_id', Number(data.category_id)); // Convert ke Number sebelum diproses di Backend

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
                <DateField label="Waktu Transaksi" name="time" time={data.time} setDate={(val) => setData('time', new Date(val))} />
                <TextField
                    label="Nama"
                    name="name"
                    tabIndex={1}
                    placeholder="Contoh: Gaji"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    message={errors.name}
                />
                <TextField
                    label="Jumlah Pemasukan"
                    name="amount"
                    tabIndex={2}
                    type="number"
                    step={500}
                    min={0}
                    placeholder="0"
                    value={data.amount}
                    onChange={(e) => setData('amount', e.target.value)}
                    message={errors.amount}
                />
                <SelectField
                    label="Saldo"
                    name="balance"
                    data={balances}
                    value={String(data.balance_id)}
                    onChange={(val) => {
                        setData('balance_id', val);
                    }}
                />
                <SelectField
                    label="Kategori"
                    name="income_category"
                    data={categories}
                    value={String(data.category_id)}
                    onChange={(val) => {
                        setData('category_id', val);
                    }}
                />
            </div>
        </FormDialogContainer>
    );
};
