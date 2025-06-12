import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { AlertDialogAction } from '../ui/alert-dialog';
import { DialogConfirm, DialogConfirmProps } from './confirm-dialog';

type DeleteDialogProps = DialogConfirmProps & {
    id: number;
    handleSubmit: FormEventHandler;
};

export const DeleteDialog = ({ id, handleSubmit, ...props }: DeleteDialogProps) => {
    return (
        <DialogConfirm {...props}>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={id} />
                <AlertDialogAction type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={props.isPending || !id}>
                    Hapus
                    {props.isPending && <LoaderCircle className="h-4 w-4 animate-spin" />}
                </AlertDialogAction>
            </form>
        </DialogConfirm>
    );
};
