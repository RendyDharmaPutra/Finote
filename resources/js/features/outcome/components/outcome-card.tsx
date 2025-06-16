import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatToIDR } from '@/lib/formatters';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

type OutcomeCardProps = {
    data: Outcome;
};

export const OutcomeCard: React.FC<OutcomeCardProps> = ({ data }) => {
    return (
        <Card className="group dayta-card">
            <OutcomeCardHeader data={data} />
            <OutcomeCardContent data={data} />
        </Card>
    );
};

const OutcomeCardHeader: React.FC<OutcomeCardProps> = ({ data }) => {
    return (
        <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{data.name}</CardTitle>
            </div>
            <Badge variant="outline">{data.outcome_category.name}</Badge>
        </CardHeader>
    );
};

const OutcomeCardContent: React.FC<OutcomeCardProps> = ({ data }) => {
    return (
        <CardContent>
            <div className="space-y-3">
                <div>
                    <p className="text-accent text-2xl font-bold">{formatToIDR(data.amount)}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Menggunakan</span>
                    <Badge variant="secondary">{data.balance.name}</Badge>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Tanggal Transaksi</span>
                    <span className="font-medium">{format(data.time, 'dd MMMM, yyyy', { locale: id })}</span>
                </div>
            </div>
        </CardContent>
    );
};
