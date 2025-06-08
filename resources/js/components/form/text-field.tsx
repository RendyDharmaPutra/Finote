import { Input } from '../ui/input';
import { InputContainer } from './input-container';

type TextFieldProps = React.ComponentProps<'input'> & {
    label: string;
    name: string;
    index: number;
    message?: string;
};

export const TextField = ({ label, name, index, message, ...props }: TextFieldProps) => {
    return (
        <InputContainer label={label} name={name} message={message}>
            <Input id={name} type={name} tabIndex={index} required {...props} />
        </InputContainer>
    );
};
