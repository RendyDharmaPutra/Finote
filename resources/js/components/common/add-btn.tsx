import { Plus } from 'lucide-react';
import { Button } from '../ui/button';

type AddBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
};

export const AddBtn = ({ title, ...props }: AddBtnProps) => {
    return (
        <Button type="button" {...props}>
            <Plus />
            Tambah {title}
        </Button>
    );
};
