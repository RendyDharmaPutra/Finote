import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pemasukan',
        href: '/income',
    },
];

const BalancesPage: React.FC = () => {
    const { props: data } = usePage<IncomePageProps>();

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pemasukan" />
            <h1>Hello</h1>
        </AppLayout>
    );
};

export default BalancesPage;
