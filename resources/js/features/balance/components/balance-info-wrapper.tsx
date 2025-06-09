import { formatToIDR } from '@/lib/formatters';
import { usePage } from '@inertiajs/react';
import { BalanceInfo } from './balance-info';

type BalanceInfoWrapperProps = {};

export const BalanceInfoWrapper: React.FC<BalanceInfoWrapperProps> = (props) => {
    const { props: data } = usePage<BalancesPageProps>();

    return (
        <section className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BalanceInfo title="Total Saldo" value={formatToIDR(data.totalAmount)} description="dari 5 Saldo" />
            <BalanceInfo title="Saldo tertinggi" value={formatToIDR(data.highestBalance)} description="di antara 5 saldo" />
            <BalanceInfo title="Saldo dimiliki" value={data.balanceCount} description="saldo yang dimiliki" />
        </section>
    );
};
