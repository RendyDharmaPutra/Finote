import { Button } from '@/components/ui/button';
import { formatToIDR } from '@/lib/formatters';
import { formatDistanceToNow } from 'date-fns';
import { Pencil, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { useBalanceDialog } from '../context/balance-dialog-context';

type BalanceCardProps = {
    data: Balance;
};

export const BalanceCard: React.FC<BalanceCardProps> = (props) => {
    return (
        <Card className="group transition-shadow hover:shadow-lg">
            <BalanceCardHeader data={props.data} />
            <BalanceCardContent data={props.data} />
        </Card>
    );
};

const BalanceCardHeader: React.FC<BalanceCardProps> = (props) => {
    const { setShowDeleteDialog, setShowEditDialog, setSelectedBalance } = useBalanceDialog();

    return (
        <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{props.data.name}</CardTitle>
                <div className="flex flex-row gap-2.5">
                    <BalanceCardAction
                        label="Ubah"
                        onClick={() => {
                            setShowEditDialog(true);
                            setSelectedBalance(props.data);
                        }}
                    >
                        <Pencil className="h-4 w-4" />
                    </BalanceCardAction>
                    <BalanceCardAction
                        label="Hapus"
                        onClick={() => {
                            setShowDeleteDialog(true);
                            setSelectedBalance(props.data);
                        }}
                    >
                        <Trash2 className="h-4 w-4" />
                    </BalanceCardAction>
                </div>
            </div>
        </CardHeader>
    );
};

const BalanceCardContent: React.FC<BalanceCardProps> = (props) => {
    return (
        <CardContent>
            <div className="space-y-3">
                <div>
                    <p className="text-muted-foreground text-sm">Saldo saat ini</p>
                    <p className="text-2xl font-bold">{formatToIDR(props.data.amount)}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Terakhir diperbarui</span>
                    <span className="font-medium">{formatDistanceToNow(props.data.updated_at, { addSuffix: true })}</span>
                </div>
            </div>
        </CardContent>
    );
};

const BalanceCardAction = ({ label, ...props }: React.ComponentProps<'button'> & { label: 'Ubah' | 'Hapus' }) => {
    const textColor =
        label === 'Ubah'
            ? 'text-gray-700 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-400'
            : 'text-red-500 opacity-0 duration-250 group-hover:opacity-100 hover:text-red-600';

    return (
        <Button {...props} size="sm" variant="outline" className={`opacity-0 duration-250 group-hover:opacity-100 ${textColor}`}>
            {props.children}
            <span className="sr-only">{label}</span>
        </Button>
    );
};
