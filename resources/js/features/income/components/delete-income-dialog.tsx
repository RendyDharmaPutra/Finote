import { DeleteDialog } from '@/components/dialog/delete-dialog';
import { useForm } from '@inertiajs/react';
import { useIncomeDialog } from '../context/income-dialog-context';

type DeleteIncomeDialogProps = {};

export const DeleteIncomeDialog = (props: DeleteIncomeDialogProps) => {
    const { showDeleteDialog, setShowDeleteDialog, selectedData } = useIncomeDialog();

    const { delete: destroy, processing } = useForm();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        destroy(route('income.destroy', { income: selectedData?.id! }), {
            onSuccess: () => setShowDeleteDialog(false),
        });
    };

    return (
        <DeleteDialog
            title="Hapus Pemasukan"
            description={`Yakin untuk menghapus Pemasukan ${selectedData?.name} pada ${selectedData?.time}? Aksi ini tidak dapat dibatalkan`}
            open={showDeleteDialog}
            setOpen={setShowDeleteDialog}
            handleSubmit={handleSubmit}
            isPending={processing}
            id={selectedData?.id!}
        />
    );
};
