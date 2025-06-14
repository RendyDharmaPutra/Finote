import { ContentHeader } from '@/layouts/content-header';
import { PageContent } from '@/layouts/page-content';
import { IncomeWrapper } from './income-wrapper';

type IncomePageContentProps = {};

export const IncomePageContent: React.FC<IncomePageContentProps> = (props) => {
    return (
        <PageContent>
            <ContentHeader title="Rangkuman Pemasukan" description="Lacak dan Kelola semua Sumber Pemasukan Kamu" />
            <IncomeWrapper />
        </PageContent>
    );
};
