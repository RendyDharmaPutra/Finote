import { BalanceFormDialog } from '@/components/features/balance/balance-form-dialog';
import { BalanceInfoWrapper } from '@/components/features/balance/balance-info-wrapper';
import { BalanceWrapper } from '@/components/features/balance/balance-wrapper';
import AppLayout from '@/layouts/app-layout';
import { ContentHeader } from '@/layouts/content-header';
import { PageContent } from '@/layouts/page-content';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Saldo',
        href: '/balance',
    },
];

const BalancesPage: React.FC<BalancesPageProps> = (props) => {
    const [showAddDialog, setShowAddDialog] = useState(false);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Saldo" />
            <PageContent>
                <ContentHeader title="Rangkuman Saldo" description="Kelola semua Saldo Keuangan Kamu" />
                <BalanceInfoWrapper />
                <BalanceWrapper setShowDialog={setShowAddDialog} />
                <BalanceFormDialog open={showAddDialog} setOpen={setShowAddDialog} title="Tambah Saldo Baru" />
            </PageContent>
        </AppLayout>
    );
};

export default BalancesPage;
