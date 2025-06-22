import { EditOutcomePageContent } from '@/features/outcome/components/edit-outcome-page-content';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const getBreadcrumb = (id: number): BreadcrumbItem[] => {
    return [
        {
            title: 'Pengeluaran',
            href: '/outcome',
        },
        {
            title: 'Ubah Pengeluaran',
            href: `/outcome/${id}/edit`,
        },
    ];
};

const EditOutcomePage: React.FC = () => {
    const { outcome } = usePage<OutcomeDetailPageProps>().props;

    return (
        <AppLayout breadcrumbs={getBreadcrumb(outcome.id!)}>
            <Head title="Ubah Pengeluaran" />
            <EditOutcomePageContent />
        </AppLayout>
    );
};

export default EditOutcomePage;
