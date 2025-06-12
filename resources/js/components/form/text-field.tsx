import { Input } from '../ui/input';
import { InputContainer } from './input-container';

type TextFieldProps = React.ComponentProps<'input'> & {
    label: string;
    name: string;
    message?: string;
};

export const TextField = ({ label, name, message, ...props }: TextFieldProps) => {
    return (
        <InputContainer label={label} name={name} message={message}>
            <Input id={name} required {...props} />
        </InputContainer>
    );
};
