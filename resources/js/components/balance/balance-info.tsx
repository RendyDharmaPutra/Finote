import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

type BalanceInfoProps = {
    title: string;
    value: number;
    description: string;
};

export const BalanceInfo = (props: BalanceInfoProps) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{props.title}</CardTitle>
                <TrendingUp className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">
                    {props.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <p className="text-muted-foreground text-xs">{props.description}</p>
            </CardContent>
        </Card>
    );
};
