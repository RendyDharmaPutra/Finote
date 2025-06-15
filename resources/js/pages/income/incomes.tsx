import { IncomeDialogProvider } from '@/features/income/context/income-dialog-context';
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

const IncomesPage: React.FC = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Pemasukan" />
            <IncomeDialogProvider>
                <IncomePageContent />
            </IncomeDialogProvider>
        </AppLayout>
    );
};

export default IncomesPage;
