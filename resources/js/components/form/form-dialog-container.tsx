import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export type FormDialogContainerProps = {
    title: string;
    description?: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
};

export const FormDialogContainer = (props: FormDialogContainerProps) => {
    return (
        <Dialog open={props.open} onOpenChange={props.setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{props.title}</DialogTitle>
                    <DialogDescription>{props.description} Masukkan semua informasi yang dibutuhkan di bawah</DialogDescription>
                </DialogHeader>
                {props.children}
                <div className="flex justify-end space-x-2 pt-4">
                    <Button type="button" variant="outline" onClick={() => props.setOpen(false)}>
                        Batal
                    </Button>
                    <Button type="submit">Simpan</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
