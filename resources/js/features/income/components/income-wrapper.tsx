import { EmptyBoundary } from '@/components/common/boundary/empty-boundary';
import { WrapperHeader } from '@/components/container/wrapper-header';
import { usePage } from '@inertiajs/react';
import { Coins } from 'lucide-react';
import { useIncomeDialog } from '../context/income-dialog-context';
import { IncomeCard } from './income-card';

type IncomeWrapperProps = {};

export const IncomeWrapper: React.FC<IncomeWrapperProps> = (props) => {
    const { setShowAddDialog } = useIncomeDialog();

    return (
        <section className="flex flex-col gap-4">
            <WrapperHeader title="Pemasukan" addCallback={() => setShowAddDialog(true)} />
            <IncomeWrapperContent />
        </section>
    );
};

const IncomeWrapperContent = () => {
    const { props: data } = usePage<IncomePageProps>();

    if (data.incomes.length < 1) {
        return (
            <EmptyBoundary
                title="Belum ada Saldo yang dimiliki"
                description="Belum ada saldo yang kamu miliki. Tambahkan Saldo terlebih dahulu untuk kelola keuangan kamu."
                icon={Coins}
            />
        );
    }

    return (
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.incomes.map((income) => (
                <IncomeCard key={income.id} data={income} />
            ))}
        </section>
    );
};
