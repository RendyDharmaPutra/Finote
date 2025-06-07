import { formatDistanceToNow } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

type BalanceCardProps = {
    data: Balance;
};

export const BalanceCard: React.FC<BalanceCardProps> = (props) => {
    return (
        <Card key={props.data.id} className="cursor-pointer transition-shadow hover:shadow-lg">
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{props.data.name}</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    <div>
                        <p className="text-muted-foreground text-sm">Saldo saat ini</p>
                        <p className="text-2xl font-bold">
                            ${props.data.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
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
