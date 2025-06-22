import AppLayout from '@/layouts/app-layout';
import { formatToIDR } from '@/lib/formatters';
import { BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    // Data statis untuk statistik
    // const [totalBalance, setTotalBalance] = useState(25000); // Total Saldo
    // const [latestIncome, setLatestIncome] = useState(5000); // Pemasukan Terakhir
    // const [latestOutcome, setLatestOutcome] = useState(2000); // Pengeluaran Terakhir
    const { lastIncome, lastOutcome, totalBalance } = usePage<DashboardPageProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex flex-col gap-6 p-8">
                {/* Grid untuk Pemasukan Terakhir dan Pengeluaran Terakhir */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Pemasukan Terakhir */}
                    <div
                        className="flex items-center justify-center rounded-xl p-8 text-xl font-semibold text-white shadow-lg"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1619149769183-01fc5bccc153?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWFuZ3xlbnwwfHwwfHx8MA%3D%3D')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div>
                            <h3 className="text-lg font-bold">Pemasukan Terakhir</h3>
                            <p className="text-3xl">{formatToIDR(lastIncome)}</p>
                        </div>
                    </div>

                    {/* Pengeluaran Terakhir */}
                    <div
                        className="flex items-center justify-center rounded-xl p-8 text-xl font-semibold text-white shadow-lg"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1554768803-2ae381da5645?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dWFuZyUyMHRlcmJha2FyfGVufDB8fDB8fHww')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div>
                            <h3 className="text-lg font-bold">Pengeluaran Terakhir</h3>
                            <p className="text-3xl">{formatToIDR(lastOutcome)}</p>
                        </div>
                    </div>
                </div>

                {/* Total Saldo yang lebih besar dan memenuhi hampir seluruh lebar */}
                <div
                    className="mt-4 flex items-center justify-center rounded-xl p-24 text-6xl font-semibold text-white shadow-xl"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1604156425963-9be03f86a428?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWFuZ3xlbnwwfHwwfHx8MA%3D%3D')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div>
                        <h3 className="text-4xl font-bold">Total Saldo</h3>
                        <p className="text-7xl">{formatToIDR(totalBalance)}</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
