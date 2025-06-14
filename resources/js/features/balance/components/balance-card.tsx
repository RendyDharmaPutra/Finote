import { CardAction } from '@/components/card/card-action';
import { formatToIDR } from '@/lib/formatters';
import { formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';
import { Pencil, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { useBalanceDialog } from '../context/balance-dialog-context';

type BalanceCardProps = {
    data: Balance;
};

export const BalanceCard: React.FC<BalanceCardProps> = (props) => {
    return (
        <Card className="group data-card">
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
                    <CardAction
                        label="Ubah"
                        onClick={() => {
                            setShowEditDialog(true);
                            setSelectedBalance(props.data);
                        }}
                    >
                        <Pencil className="h-4 w-4" />
                    </CardAction>
                    <CardAction
                        label="Hapus"
                        onClick={() => {
                            setShowDeleteDialog(true);
                            setSelectedBalance(props.data);
                        }}
                    >
                        <Trash2 className="h-4 w-4" />
                    </CardAction>
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
                    <span className="font-medium">{formatDistanceToNow(props.data.updated_at, { addSuffix: true, locale: id })}</span>
                </div>
            </div>
        </CardContent>
    );
};
