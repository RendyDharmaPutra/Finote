import { formatToIDR } from '@/lib/formatters';
import { BalanceInfo } from './balance-info';

type BalanceInfoWrapperProps = {
    balanceCount: number;
    highestBalance: number;
    totalAmount: number;
};

export const BalanceInfoWrapper: React.FC<BalanceInfoWrapperProps> = (props) => {
    return (
        <section className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BalanceInfo title="Total Saldo" value={formatToIDR(props.totalAmount)} description="dari 5 Saldo" />
            <BalanceInfo title="Saldo tertinggi" value={formatToIDR(props.highestBalance)} description="di antara 5 saldo" />
            <BalanceInfo title="Saldo dimiliki" value={props.balanceCount} description="saldo yang dimiliki" />
        </section>
    );
};
