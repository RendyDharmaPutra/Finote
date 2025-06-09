import { AlertDialogCancel } from '../ui/alert-dialog';
import { AlertDialogContainer, AlertDialogContainerProps } from './alert-dialog-container';

export type DialogConfirmProps = AlertDialogContainerProps & {
    isPending: boolean;
};

export const DialogConfirm: React.FC<DialogConfirmProps> = ({ isPending, children, ...props }) => {
    return (
        <AlertDialogContainer {...props}>
            <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
            {children}
        </AlertDialogContainer>
    );
};
