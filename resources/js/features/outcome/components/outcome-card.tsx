import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatToIDR } from '@/lib/formatters';
import { router } from '@inertiajs/react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { Package } from 'lucide-react';

type OutcomeCardProps = {
    data: OutcomeList;
};

export const OutcomeCard: React.FC<OutcomeCardProps> = ({ data }) => {
    return (
        <Card
            className="group data-card cursor-pointer"
            onClick={() => {
                router.visit(`/outcome/${data.id}`);
            }}
        >
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
                <div className="flex flex-row justify-between">
                    <p className="text-primary text-2xl font-bold">{formatToIDR(data.amount)}</p>
                    <div className="flex items-center gap-1">
                        <Package className="h-3 w-3" />
                        <span className="font-medium">{data.detail_outcomes_count} barang</span>
                    </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Saldo digunakan</span>
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
