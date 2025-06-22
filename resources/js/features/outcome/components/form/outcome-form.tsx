import { useForm } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';
import { RouteName } from 'vendor/tightenco/ziggy/src/js';
import { OutcomeDetailsSection } from './outcome-details-section';
import { OutcomeInfoSection } from './outcome-info-section';

type OutcomeFormProps = {
    initialValues?: Outcome;
    action: RouteName;
    method: 'post' | 'put';
};

export const OutcomeForm: React.FC<OutcomeFormProps> = ({ initialValues, action, method = 'post' }) => {
    const { data, setData, post, put, processing, errors, reset } = useForm<Required<OutcomeForm>>({
        name: '',
        amount: 0,
        time: new Date(),
        balance_id: '',
        category_id: '',
        details: [],
    });

    // Set Initial Values jika ada dari Props
    useEffect(() => {
        if (initialValues) {
            setData({
                name: initialValues.name,
                amount: initialValues.amount,
                time: new Date(initialValues.time),
                balance_id: initialValues.balance.id!,
                category_id: initialValues.outcome_category.id!,
                details: initialValues.detail_outcomes ?? [],
            });
        }
    }, [initialValues]);

    // useEffect(() => console.log(data), [data]); // ! Debug

    const addDetail = (newDetail: OutcomeDetailForm) => {
        const updatedDetails = [...(data.details || []), newDetail];
        const updatedAmount = Number(data.amount || 0) + Number(newDetail.price || 0);

        setData({
            ...data,
            details: updatedDetails,
            amount: updatedAmount,
        });
    };
    const removeDetail = (index: number, detail: OutcomeDetailForm) => {
        const updatedDetails = data.details.filter((_, i) => i !== index);
        const updatedAmount = data.amount - Number(detail.price);

        setData({
            ...data,
            details: updatedDetails,
            amount: updatedAmount,
        });
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        const submitFn = method === 'put' ? put : post;
        const routeParams = method === 'put' ? { outcome: initialValues?.id } : undefined;

        // setData('amount', Number(data.amount)); // Convert ke Number sebelum diproses di Backend

        submitFn(route(action, routeParams), {
            onSuccess: () => {
                reset();
            },
            onError: (errors: unknown) => {
                console.error('Submission error:', errors);
            },
        });
    };

    return (
        <div className="grid gap-8 lg:grid-cols-3">
            <OutcomeInfoSection data={data} setData={setData} errors={errors} onSubmit={handleSubmit} processing={processing} />
            <OutcomeDetailsSection data={data} processing={processing} addDetail={addDetail} removeDetail={removeDetail} />
        </div>
    );
};
