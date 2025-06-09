import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '../ui/alert-dialog';

export type AlertDialogContainerProps = {
    title: string;
    description: string;
    open: boolean;
    setOpen: (value: boolean) => void;
    children?: React.ReactNode;
};

export const AlertDialogContainer: React.FC<AlertDialogContainerProps> = (props) => {
    return (
        <AlertDialog open={props.open} onOpenChange={props.setOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{props.title}</AlertDialogTitle>
                    <AlertDialogDescription>{props.description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>{props.children}</AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
