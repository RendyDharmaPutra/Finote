import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pengeluaran',
        href: '/outcome',
    },
];

const OutcomesfPage: React.FC = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pengeluaran" />
        </AppLayout>
    );
};

export default OutcomesfPage;
