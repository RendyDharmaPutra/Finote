import { TextField } from '@/components/form/text-field';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useEffect, useState } from 'react';

type OutcomeDetailFormProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSubmit: (detail: OutcomeDetailForm) => void;
};

export const OutcomeDetailForm: React.FC<OutcomeDetailFormProps> = (props) => {
    const [detail, setDetail] = useState<OutcomeDetailForm>({
        name: '',
        price: '',
    });

    useEffect(() => {
        props.open &&
            setDetail({
                name: '',
                price: '',
            });
    }, [props.open]);

    const handleSubmit = () => {
        // console.log(detail); // ! Debug

        props.onSubmit(detail);

        props.onOpenChange(false);
    };

    return (
        <Dialog open={props.open} onOpenChange={props.onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <OutcomeDetailFormHeader />

                <OutcomeDetailFormContent detail={detail} setDetail={setDetail} />

                <OutcomeDetailFormFooter submit={handleSubmit} onOpenChange={props.onOpenChange} />
            </DialogContent>
        </Dialog>
    );
};

const OutcomeDetailFormHeader = () => {
    return (
        <DialogHeader>
            <DialogTitle>Tambah Barang</DialogTitle>
            <DialogDescription>Tambah barang rincian pengeluaran</DialogDescription>
        </DialogHeader>
    );
};

const OutcomeDetailFormContent = ({
    detail,
    setDetail,
}: {
    detail: OutcomeDetailForm;
    setDetail: React.Dispatch<React.SetStateAction<OutcomeDetailForm>>;
}) => {
    return (
        <div className="space-y-4 py-4">
            <TextField
                label="Nama Barang"
                name="itemName"
                tabIndex={1}
                placeholder="Contoh: Mie Ayam"
                value={detail.name}
                onChange={(e) => setDetail((prev) => ({ ...prev, name: e.target.value }))}
            />

            <TextField
                label="Harga Barang"
                name="itemName"
                type="number"
                tabIndex={2}
                placeholder="0"
                step={500}
                value={detail.price}
                onChange={(e) =>
                    setDetail((prev) => ({
                        ...prev,
                        price: parseFloat(e.target.value || '0'),
                    }))
                }
            />
        </div>
    );
};

const OutcomeDetailFormFooter = ({ submit, onOpenChange }: { submit: () => void; onOpenChange: (open: boolean) => void }) => {
    return (
        <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Batal
            </Button>
            <Button type="button" onClick={submit}>
                Simpan
            </Button>
        </div>
    );
};
