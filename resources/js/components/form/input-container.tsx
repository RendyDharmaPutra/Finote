import InputError from '../input-error';
import { Label } from '../ui/label';

type InputContainerProps = {
    label: string;
    name: string;
    message?: string;
    children: React.ReactNode;
};

export const InputContainer = (props: InputContainerProps) => {
    return (
        <div className="grid gap-2">
            <Label htmlFor={props.name}>{props.label}</Label>
            {props.children}
            <InputError message={props.message} />
        </div>
    );
};
