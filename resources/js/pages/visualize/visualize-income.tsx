import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Visualisasi Pemasukan',
        href: '/visualize-income',
    },
];

const VisualizeIncome = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Visualisasi Pemasukan" />
        </AppLayout>
    );
};

export default VisualizeIncome;
