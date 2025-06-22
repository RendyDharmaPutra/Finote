import { AddBtn } from '@/components/common/add-btn';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { formatToIDR } from '@/lib/formatters';
import { ReceiptText, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { OutcomeDetailForm } from './outcome-detail-form';

type OutcomeDetailsSectionProps = {
    data: Required<OutcomeForm>;
    processing: boolean;
    addDetail: (newDetail: OutcomeDetailForm) => void;
    removeDetail: (index: number, detail: OutcomeDetailForm) => void;
};

export const OutcomeDetailsSection: React.FC<OutcomeDetailsSectionProps> = (props) => {
    const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);

    return (
        <>
            <div className="lg:col-span-1">
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                                <ReceiptText className="h-5 w-5" /> Rincian Pengeluaran
                            </CardTitle>
                            <AddBtn
                                title="Rincian"
                                onClick={() => {
                                    setIsDetailDialogOpen(true);
                                }}
                            />
                        </div>
                    </CardHeader>
                    <CardContent>
                        {props.data.details.length === 0 ? (
                            <div className="py-8 text-center">
                                <ReceiptText className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
                                <p className="text-muted-foreground mb-4 text-sm">Belum ada rincian yang ditambahkan</p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {props.data.details.map((detail: OutcomeDetailForm, index) => (
                                    <OutcomeDetailCard
                                        key={index}
                                        index={index}
                                        detail={detail}
                                        processing={props.processing}
                                        removeDetail={props.removeDetail}
                                    />
                                ))}

                                <Separator />
                            </div>
                        )}
                        <div className="bg-primary/5 flex items-center justify-between rounded-lg p-3">
                            <span className="font-semibold">Total Harga</span>
                            <span className="text-primary text-lg font-bold">{formatToIDR(props.data.amount)}</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <OutcomeDetailForm open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen} onSubmit={props.addDetail} />
        </>
    );
};

const OutcomeDetailCard = ({
    index,
    detail,
    removeDetail,
    processing,
}: {
    index: number;
    detail: OutcomeDetailForm;
    removeDetail: (index: number, detail: OutcomeDetailForm) => void;
    processing: boolean;
}) => {
    return (
        <div key={index} className="bg-muted/50 flex items-center justify-between rounded-lg p-3">
            <div className="flex-1">
                <p className="text-sm font-medium">{detail.name}</p>
            </div>
            <div className="flex items-center gap-2">
                {detail.price && <span className="text-primary font-bold">{formatToIDR(Number(detail.price))}</span>}

                <Button type="button" variant="ghost" size="sm" disabled={processing} onClick={() => removeDetail(index, detail)}>
                    <Trash2 className="h-3 w-3" />
                </Button>
            </div>
        </div>
    );
};
