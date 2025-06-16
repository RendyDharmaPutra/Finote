import { ContentHeader } from '@/layouts/content-header';
import { PageContent } from '@/layouts/page-content';
import { OutcomesWrapper } from './outcomes-wrapper';

type IncomePageContentProps = {};

export const OutcomesPageContent: React.FC<IncomePageContentProps> = (props) => {
    return (
        <PageContent>
            <ContentHeader title="Rangkuman Pengeluaran" description="Lacak dan Kelola semua Sumber Pengeluaran Kamu" />
            <OutcomesWrapper />
        </PageContent>
    );
};
