import { ContentHeader } from '@/layouts/content-header';
import { PageContent } from '@/layouts/page-content';
import { OutcomeDetailList } from './outcome-detail-list';
import { OutcomeDetailMain } from './outcome-detail-main';

type OutcomeDetailPageContentProps = {};

export const OutcomeDetailPageContent: React.FC<OutcomeDetailPageContentProps> = (props) => {
    return (
        <PageContent>
            <ContentHeader title="Detail Pengeluaran" description="Rincian dari Pengeluaran kamu" />
            <OutcomeDetailMain />
            <OutcomeDetailList />
        </PageContent>
    );
};
