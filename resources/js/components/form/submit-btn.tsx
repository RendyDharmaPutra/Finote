import { LoaderCircle } from 'lucide-react';
import { Button } from '../ui/button';

type SubmitBtnProps = React.ComponentProps<'button'> & {
    label: string;
    processing: boolean;
};

export const SubmitBtn: React.FC<SubmitBtnProps> = ({ label, processing, ...props }) => {
    return (
        <Button type="submit" disabled={processing}>
            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
            {label}
        </Button>
    );
};
