import { BalancesPageContent } from '@/features/balance/components/balances-page-content';
import { BalanceDialogProvider } from '@/features/balance/context/balance-dialog-context';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Saldo',
        href: '/balance',
    },
];

const BalancesPage: React.FC = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Saldo" />
            <BalanceDialogProvider>
                <BalancesPageContent />
            </BalanceDialogProvider>
        </AppLayout>
    );
};

export default BalancesPage;
