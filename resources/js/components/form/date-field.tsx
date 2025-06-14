import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { InputContainer } from './input-container';

type DateFieldProps = {
    label: string;
    name: string;
    time: Date;
    setDate: (value: Date) => void;
};

export const DateField: React.FC<DateFieldProps> = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <InputContainer label={props.label} name={props.name}>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" id="date" className="w-full justify-between font-normal">
                        {props.time ? props.time.toLocaleDateString() : 'Select date'}
                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="pointer-events-auto z-50 w-auto overflow-hidden p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={props.time}
                        captionLayout="label"
                        onSelect={(selected) => {
                            console.log('selected');

                            if (selected) props.setDate(selected);
                            setOpen(false);
                        }}
                    />
                </PopoverContent>
            </Popover>
        </InputContainer>
    );
};
