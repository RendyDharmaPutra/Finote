import { Card, CardContent } from '@/components/ui/card';
import { formatToIDR } from '@/lib/formatters';
import { usePage } from '@inertiajs/react';
import { Separator } from '@radix-ui/react-separator';
import { Receipt } from 'lucide-react';

type OutcomeDetailListProps = {};

export const OutcomeDetailList: React.FC<OutcomeDetailListProps> = (props) => {
    const { outcome } = usePage<OutcomeDetailPageProps>().props;

    if (outcome.detail_outcomes.length < 1) return <EmptyOutcomeDetailList />;

    return (
        <>
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Rincian Biaya</h2>
                    <div className="text-muted-foreground text-sm">{outcome.detail_outcomes.length} barang pembelian</div>
                </div>
                <Separator className="mt-2" />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {outcome.detail_outcomes.map((detail, index) => (
                    <Card key={index} className="transition-shadow hover:shadow-md">
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <h3 className="text-sm font-medium">{detail.name}</h3>
                                </div>
                                <div className="text-right">
                                    {detail.price && <p className="text-primary font-bold">{formatToIDR(detail.price)}</p>}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
};

const EmptyOutcomeDetailList = () => {
    return (
        <Card className="py-12 text-center">
            <CardContent>
                <Receipt className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-lg font-semibold">Tidak ada rincian yang tersedia</h3>
                <p className="text-muted-foreground">Pengeluaran ini tidak memiliki rincian detail.</p>
            </CardContent>
        </Card>
    );
};
