import { BalanceFormDialog } from '@/features/balance/components/balance-form-dialog';
import { BalanceInfoWrapper } from '@/features/balance/components/balance-info-wrapper';
import { BalanceWrapper } from '@/features/balance/components/balance-wrapper';
import { useBalanceDialog } from '@/features/balance/context/balance-dialog-context';
import { ContentHeader } from '@/layouts/content-header';
import { PageContent } from '@/layouts/page-content';
import { DeleteBalanceDialog } from './delete-balance-dialog';

export const BalancesPageContent = () => {
    const { showAddDialog, setShowAddDialog, showEditDialog, setShowEditDialog, selectedBalance } = useBalanceDialog();

    return (
        <PageContent>
            <ContentHeader title="Rangkuman Saldo" description="Kelola semua Saldo Keuangan Kamu" />
            <BalanceInfoWrapper />
            <BalanceWrapper />
            <BalanceFormDialog open={showAddDialog} setOpen={setShowAddDialog} title="Tambah Saldo Baru" action="balance.store" />
            <BalanceFormDialog
                open={showEditDialog}
                setOpen={setShowEditDialog}
                title="Ubah Saldo"
                action="balance.update"
                method="put"
                initialValues={selectedBalance}
            />
            <DeleteBalanceDialog />
        </PageContent>
    );
};
