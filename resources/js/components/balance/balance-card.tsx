import { formatToIDR } from '@/lib/formatters';
import { formatDistanceToNow } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

type BalanceCardProps = {
    data: Balance;
};

export const BalanceCard: React.FC<BalanceCardProps> = (props) => {
    return (
        <Card className="cursor-pointer transition-shadow hover:shadow-lg">
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{props.data.name}</CardTitle>
                </div>
            </CardHeader>
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
        </Card>
    );
};
