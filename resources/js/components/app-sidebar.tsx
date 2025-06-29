import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { ChartColumnDecreasing, ChartColumnIncreasing, Coins, LayoutGrid, ReceiptText, Wallet } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Saldo',
        href: '/balance',
        icon: Wallet,
    },
    {
        title: 'Pemasukan',
        href: '/income',
        icon: Coins,
    },
    {
        title: 'Pengeluaran',
        href: '/outcome',
        icon: ReceiptText,
    },
    {
        title: 'Visualisasi Pemasukan',
        href: '/visualize-income',
        icon: ChartColumnIncreasing,
    },
    {
        title: 'Visualisasi Pengeluaran',
        href: '/visualize-outcome',
        icon: ChartColumnDecreasing,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
