import { DeleteDialog } from '@/components/dialog/delete-dialog';
import { useForm, usePage } from '@inertiajs/react';

type DeleteOutcomeDialogProps = {
    showDialog: boolean;
    setShowDialog: (value: boolean) => void;
};

export const DeleteOutcomeDialog = (props: DeleteOutcomeDialogProps) => {
    const { outcome } = usePage<OutcomeDetailPageProps>().props;

    const { delete: destroy, processing } = useForm();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        destroy(route('outcome.destroy', { outcome: outcome.id! }), {
            onSuccess: () => props.setShowDialog(false),
        });
    };

    return (
        <DeleteDialog
            title="Hapus Pengeluaran"
            description={`Yakin untuk menghapus Pengeluaran ini? Aksi ini tidak dapat dibatalkan`}
            open={props.showDialog}
            setOpen={props.setShowDialog}
            handleSubmit={handleSubmit}
            isPending={processing}
            id={outcome.id!}
        />
    );
};
