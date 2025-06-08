import { FormDialogContainer } from '@/components/form/form-dialog-container';
import { TextField } from '@/components/form/text-field';

type BalanceFormDialogProps = {
    title: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BalanceFormDialog: React.FC<BalanceFormDialogProps> = (props) => {
    return (
        <FormDialogContainer title={props.title} open={props.open} setOpen={props.setOpen}>
            <TextField label="Nama Saldo" name="name" index={1} placeholder="Tabungan" />
            <TextField label="Jumlah Awal" name="amount" index={2} type="number" step={1000} min={0} placeholder="0" />
        </FormDialogContainer>
    );
};
