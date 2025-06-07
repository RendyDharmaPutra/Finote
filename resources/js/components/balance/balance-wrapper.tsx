import { BalanceCard } from './balance-card';

type BalanceWrapperProps = {
    balances: Balance[];
};

export const BalanceWrapper: React.FC<BalanceWrapperProps> = (props) => {
    return (
        <section className="flex flex-col gap-4">
            <div className="w-full">
                <h6 className="text-lg font-semibold md:text-xl">Daftar Saldo</h6>
            </div>

            <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {props.balances.map((balance) => (
                    <BalanceCard data={balance} />
                ))}
            </section>
        </section>
    );
};
