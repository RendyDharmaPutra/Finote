import { Button } from '../ui/button';

type CardActionProps = React.ComponentProps<'button'> & {
    label: 'Ubah' | 'Hapus';
};

export const CardAction: React.FC<CardActionProps> = ({ label, ...props }) => {
    const color =
        label === 'Ubah' ? 'text-accent hover:text-accent-foreground' : 'hover:bg-destructive text-destructive hover:text-destructive-foreground';

    return (
        <Button {...props} size="sm" variant="outline" className={`transition-all duration-250 md:opacity-0 md:group-hover:opacity-100 ${color}`}>
            {props.children}
            <span className="sr-only">{label}</span>
        </Button>
    );
};
