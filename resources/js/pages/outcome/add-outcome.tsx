import { AddOutcomePageContent } from '@/features/outcome/components/add-outcome/add-outcome-page-content';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumb: BreadcrumbItem[] = [
    {
        title: 'Pengeluaran',
        href: '/outcome',
    },
    {
        title: 'Tambah Pengeluaran',
        href: `/outcome/create`,
    },
];
const OutcomeDetailPage: React.FC = () => {
    return (
        <AppLayout breadcrumbs={breadcrumb}>
            <Head title="Tambah Pengeluaran" />
            <AddOutcomePageContent />
        </AppLayout>
    );
};

export default OutcomeDetailPage;
