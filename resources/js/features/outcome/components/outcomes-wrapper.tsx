import { EmptyBoundary } from '@/components/common/boundary/empty-boundary';
import { WrapperHeader } from '@/components/container/wrapper-header';
import { usePage } from '@inertiajs/react';
import { Receipt } from 'lucide-react';
import { OutcomeCard } from './outcome-card';

type OutcomesWrapperProps = {};

export const OutcomesWrapper: React.FC<OutcomesWrapperProps> = (props) => {
    return (
        <section className="flex flex-col gap-4">
            <WrapperHeader
                title="Daftar Pengeluaran"
                addCallback={() => {
                    // router.visit('income');
                }}
            />
            <OutcomeWrapperContent />
        </section>
    );
};

const OutcomeWrapperContent = () => {
    const { outcomes } = usePage<OutcomesPageProps>().props;

    if (outcomes.length < 1) {
        return (
            <EmptyBoundary
                title="Belum ada Saldo yang dimiliki"
                description="Belum ada saldo yang kamu miliki. Tambahkan Saldo terlebih dahulu untuk kelola keuangan kamu."
                icon={Receipt}
            />
        );
    }

    return (
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome) => (
                <OutcomeCard key={outcome.id} data={outcome} />
            ))}
        </section>
    );
};
