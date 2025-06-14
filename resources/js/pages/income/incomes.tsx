import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { IncomePageContent } from '../../features/income/components/incomes-page-content';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Pemasukan',
        href: '/income',
    },
];

const BalancesPage: React.FC = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pemasukan" />
            <IncomePageContent />
        </AppLayout>
    );
};

export default BalancesPage;
