import { BalanceInfoWrapper } from '@/components/balance/balance-info-wrapper';
import { BalanceWrapper } from '@/components/balance/balance-wrapper';
import AppLayout from '@/layouts/app-layout';
import { ContentHeader } from '@/layouts/content-header';
import { PageContent } from '@/layouts/page-content';
import { Head } from '@inertiajs/react';

type BalancesPageProps = {
    balances: Balance[];
    balanceCount: number;
    highestBalance: number;
    totalAmount: number;
};

const BalancesPage: React.FC<BalancesPageProps> = (props) => {
    return (
        <AppLayout>
            <Head title="Saldo" />
            <PageContent>
                <ContentHeader title="Rangkuman Saldo" description="Kelola semua Saldo Keuangan Kamu" />
                <BalanceInfoWrapper balanceCount={props.balanceCount} highestBalance={props.highestBalance} totalAmount={props.totalAmount} />
                <BalanceWrapper balances={props.balances} />
            </PageContent>
        </AppLayout>
    );
};

export default BalancesPage;
