import { DeleteDialog } from '@/components/dialog/delete-dialog';
import { useForm } from '@inertiajs/react';
import { useBalanceDialog } from '../context/balance-dialog-context';

type DeleteBalanceDialogProps = {};

export const DeleteBalanceDialog = (props: DeleteBalanceDialogProps) => {
    const { showDeleteDialog, setShowDeleteDialog, selectedBalance } = useBalanceDialog();

    const { delete: destroy, processing } = useForm();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        destroy(route('balance.destroy', { balance: selectedBalance?.id! }), {
            onSuccess: () => setShowDeleteDialog(false),
        });
    };

    return (
        <DeleteDialog
            title="Hapus Saldo"
            description={`Yakin untuk menghapus Saldo ${selectedBalance?.name}? Aksi ini tidak dapat dibatalkan`}
            open={showDeleteDialog}
            setOpen={setShowDeleteDialog}
            handleSubmit={handleSubmit}
            isPending={processing}
            id={selectedBalance?.id!}
        />
    );
};
