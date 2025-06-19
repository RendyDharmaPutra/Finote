import { ContentHeader } from '@/layouts/content-header';
import { PageContent } from '@/layouts/page-content';
import { OutcomesWrapper } from './outcomes-wrapper';

type OutcomesPageContentProps = {};

export const OutcomesPageContent: React.FC<OutcomesPageContentProps> = (props) => {
    return (
        <PageContent>
            <ContentHeader title="Rangkuman Pengeluaran" description="Lacak dan Kelola semua Sumber Pengeluaran Kamu" />
            <OutcomesWrapper />
        </PageContent>
    );
};
