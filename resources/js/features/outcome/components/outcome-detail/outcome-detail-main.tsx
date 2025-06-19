import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatToIDR } from '@/lib/formatters';
import { usePage } from '@inertiajs/react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { Banknote, Calendar, ReceiptText, Tag, Wallet } from 'lucide-react';

type OutcomeDetailMainProps = {};

export const OutcomeDetailMain: React.FC<OutcomeDetailMainProps> = (props) => {
    const { outcome } = usePage<OutcomeDetailPageProps>().props;

    return (
        <Card className="mb-8">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                        <ReceiptText className="text-primary h-6 w-6" />
                        {outcome.name}
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex items-center gap-3">
                        <Banknote className="text-primary h-5 w-5" />
                        <div>
                            <p className="text-muted-foreground text-sm">Total Harga</p>
                            <p className="text-primary text-xl font-bold">{formatToIDR(outcome.amount)}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Tag className="text-muted-foreground h-5 w-5" />
                        <div>
                            <p className="text-muted-foreground text-sm">Kategori</p>
                            <Badge className="bg-background text-primary border-none" variant="secondary">
                                {outcome.outcome_category.name}
                            </Badge>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Wallet className="text-muted-foreground h-5 w-5" />
                        <div>
                            <p className="text-muted-foreground text-sm">Saldo</p>
                            <p className="font-medium">{outcome.balance.name}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Calendar className="text-muted-foreground h-5 w-5" />
                        <div>
                            <p className="text-muted-foreground text-sm">Waktu Transaksi</p>
                            <p className="font-medium">{format(outcome.time, 'dd MMMM yyyy', { locale: id })}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
