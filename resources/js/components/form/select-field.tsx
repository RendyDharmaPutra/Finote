import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { InputContainer } from './input-container';

type SelectFieldProps<T> = {
    label: string;
    name: string;
    message?: string;
    value: string;
    onChange?: (value: string) => void;
    data: T;
};

export const SelectField = <T extends any[]>(props: SelectFieldProps<T>) => {
    return (
        <InputContainer label={props.label} name={props.name} message={props.message}>
            <Select required onValueChange={props.onChange} value={props.value}>
                <SelectTrigger id={props.name} className="w-full">
                    <SelectValue placeholder={`Pilih ${props.label}`} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{props.label}</SelectLabel>
                        {props.data.map((data) => (
                            <SelectItem key={data.id} value={`${data.id!}`}>
                                {data.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </InputContainer>
    );
};
