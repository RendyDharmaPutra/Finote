import { OutcomesPageContent } from '@/features/outcome/components/outcomes-page-content';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pengeluaran',
        href: '/outcome',
    },
];

const OutcomesPage: React.FC = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pengeluaran" />
            <OutcomesPageContent />
        </AppLayout>
    );
};

export default OutcomesPage;
