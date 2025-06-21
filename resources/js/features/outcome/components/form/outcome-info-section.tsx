import { DateField } from '@/components/form/date-field';
import { SelectField } from '@/components/form/select-field';
import { TextField } from '@/components/form/text-field';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

type OutcomeInfoSectionProps = {
    data: Required<OutcomeForm>;
    setData: (field: keyof OutcomeForm, value: any) => void;
    errors: Record<string, string>;
    processing: boolean;
    onSubmit: React.FormEventHandler;
};

export const OutcomeInfoSection: React.FC<OutcomeInfoSectionProps> = (props) => {
    const { balances, categories } = usePage<AddOutcomeProps>().props;

    return (
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Informasi Pengeluaran</CardTitle>
                </CardHeader>

                <CardContent>
                    <form onSubmit={props.onSubmit} className="space-y-6">
                        <DateField label="Waktu Transaksi" name="time" time={props.data.time} setDate={(val) => props.setData('time', val)} />

                        <TextField
                            label="Nama"
                            name="name"
                            placeholder="Contoh: Makan Siang"
                            tabIndex={1}
                            value={props.data.name}
                            onChange={(e) => props.setData('name', e.target.value)}
                            message={props.errors.name}
                        />

                        <div className="grid gap-4 md:grid-cols-2">
                            <SelectField
                                label="Saldo yang digunakan"
                                name="balance_id"
                                value={String(props.data.balance_id)}
                                onChange={(val) => props.setData('balance_id', val)}
                                message={props.errors.balance_id}
                                data={balances}
                            />

                            <SelectField
                                label="Kategori"
                                name="category_id"
                                value={String(props.data.category_id)}
                                onChange={(val) => props.setData('category_id', val)}
                                message={props.errors.category_id}
                                data={categories}
                            />
                        </div>

                        <div className="flex justify-end space-x-2 pt-4">
                            <Link href="/outcome">
                                <Button type="button" variant="outline" disabled={props.processing}>
                                    Batal
                                </Button>
                            </Link>
                            <Button type="submit" disabled={props.processing}>
                                {props.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Simpan
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
