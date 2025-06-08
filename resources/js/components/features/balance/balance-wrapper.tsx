import { AddBtn } from '@/components/common/add-btn';
import { usePage } from '@inertiajs/react';
import { BalanceCard } from './balance-card';

type BalanceWrapperProps = {
    setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BalanceWrapper: React.FC<BalanceWrapperProps> = (props) => {
    return (
        <section className="flex flex-col gap-4">
            <BalanceWrapperHeader setShowDialog={props.setShowDialog} />
            <BalanceWrapperContent />
        </section>
    );
};

const BalanceWrapperHeader: React.FC<BalanceWrapperProps> = (props) => {
    return (
        <div className="flex w-full flex-row justify-between">
            <h6 className="text-lg font-semibold md:text-xl">Daftar Saldo</h6>
            <AddBtn title="Saldo" onClick={() => props.setShowDialog(true)} />
        </div>
    );
};

const BalanceWrapperContent = () => {
    const { props: data } = usePage<BalancesPageProps>();

    return (
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.balances.map((balance) => (
                <BalanceCard key={balance.id} data={balance} />
            ))}
        </section>
    );
};
