import { LucideIcon } from 'lucide-react';

type EmptyBoundaryProps = {
    icon: LucideIcon;
    title: string;
    description: string;
};

export const EmptyBoundary: React.FC<EmptyBoundaryProps> = (props) => {
    return (
        <div className="flex w-full items-center justify-center">
            <div className="flex w-fit flex-col items-center justify-center rounded-xl border p-12 text-center">
                <div className="bg-muted mb-6 rounded-full p-6">
                    <props.icon className="text-muted-foreground h-12 w-12" />
                </div>
                <h3 className="mb-2 text-2xl font-semibold">{props.title}</h3>
                <p className="text-muted-foreground mb-6 max-w-md">{props.description}</p>
            </div>
        </div>
    );
};
