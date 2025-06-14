import { CardAction } from '@/components/card/card-action';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatToIDR } from '@/lib/formatters';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { Pencil, Trash2 } from 'lucide-react';
import { useIncomeDialog } from '../context/income-dialog-context';

type IncomeCardProps = {
    data: Income;
};

export const IncomeCard: React.FC<IncomeCardProps> = ({ data }) => {
    return (
        <Card className="group dayta-card">
            <IncomeCardHeader data={data} />
            <IncomeCardContent data={data} />
        </Card>
    );
};

const IncomeCardHeader: React.FC<IncomeCardProps> = ({ data }) => {
    const { setShowEditDialog, setShowDeleteDialog, setSelectedData } = useIncomeDialog();

    return (
        <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{data.name}</CardTitle>
                <div className="flex flex-row gap-2.5">
                    <CardAction
                        label="Ubah"
                        onClick={() => {
                            setShowEditDialog(true);
                            setSelectedData(data);
                        }}
                    >
                        <Pencil className="h-4 w-4" />
                    </CardAction>
                    <CardAction
                        label="Hapus"
                        onClick={() => {
                            setShowDeleteDialog(true);
                            setSelectedData(data);
                        }}
                    >
                        <Trash2 className="h-4 w-4" />
                    </CardAction>
                </div>
            </div>
            <Badge variant="outline">{data.income_category.name}</Badge>
        </CardHeader>
    );
};

const IncomeCardContent: React.FC<IncomeCardProps> = ({ data }) => {
    return (
        <CardContent>
            <div className="space-y-3">
                <div>
                    <p className="text-accent text-2xl font-bold">{formatToIDR(data.amount)}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Disimpan pada</span>
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
