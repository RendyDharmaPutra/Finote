import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Visualisasi Pengeluaran',
        href: '/visualize-outcome',
    },
];

const VisualizeOutcome = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Visualisasi Pengeluaran" />
        </AppLayout>
    );
};

export default VisualizeOutcome;
