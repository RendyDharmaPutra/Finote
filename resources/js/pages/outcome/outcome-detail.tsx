import { OutcomeDetailPageContent } from '@/features/outcome/components/outcome-detail/outcome-detail-page-content';
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
            title: 'Detail Pengeluaran',
            href: `/outcome/${id}`,
        },
    ];
};

const OutcomeDetailPage: React.FC = () => {
    const { outcome } = usePage<OutcomeDetailPageProps>().props;

    return (
        <AppLayout breadcrumbs={getBreadcrumb(outcome.id!)}>
            <Head title="Detail Pengeluaran" />
            <OutcomeDetailPageContent />
        </AppLayout>
    );
};

export default OutcomeDetailPage;
