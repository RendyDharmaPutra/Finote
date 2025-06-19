import { EmptyBoundary } from '@/components/common/boundary/empty-boundary';
import { WrapperHeader } from '@/components/container/wrapper-header';
import { usePage } from '@inertiajs/react';
import { Wallet } from 'lucide-react';
import { useBalanceDialog } from '../context/balance-dialog-context';
import { BalanceCard } from './balance-card';

export const BalanceWrapper = () => {
    const { setShowAddDialog } = useBalanceDialog();

    return (
        <section className="flex flex-col gap-4">
            <WrapperHeader title="Saldo" addCallback={() => setShowAddDialog(true)} />
            <BalanceWrapperContent />
        </section>
    );
};

const BalanceWrapperContent = () => {
    const { props: data } = usePage<BalancesPageProps>();

    if (data.balanceCount < 1) {
        return (
            <EmptyBoundary
                title="Belum ada Saldo yang dimiliki"
                description="Belum ada saldo yang kamu miliki. Tambahkan Saldo terlebih dahulu untuk kelola keuangan kamu."
                icon={Wallet}
            />
        );
    }

    return (
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.balances.map((balance) => (
                <BalanceCard key={balance.id} data={balance} />
            ))}
        </section>
    );
};
