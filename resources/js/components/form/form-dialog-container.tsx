import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

export type FormDialogContainerProps = {
    title: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    processing: boolean;
    onSubmit: FormEventHandler;
    children: React.ReactNode;
};

export const FormDialogContainer = (props: FormDialogContainerProps) => {
    return (
        <Dialog open={props.open} onOpenChange={props.setOpen}>
            <DialogContent className="flex flex-col gap-6 sm:max-w-[425px]">
                <form onSubmit={props.onSubmit}>
                    <DialogHeader>
                        <DialogTitle>{props.title}</DialogTitle>
                        <DialogDescription>Masukkan semua informasi yang dibutuhkan di bawah</DialogDescription>
                    </DialogHeader>
                    {props.children}
                    <div className="flex justify-end space-x-2 pt-4">
                        <Button type="button" variant="outline" onClick={() => props.setOpen(false)}>
                            Batal
                        </Button>
                        <Button type="submit" disabled={props.processing}>
                            {props.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Simpan
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};
