import { ContentHeader } from '@/layouts/content-header';
import { PageContent } from '@/layouts/page-content';
import { OutcomeForm } from '../form/outcome-form';

type AddOutcomePageContentProps = {};

export const AddOutcomePageContent: React.FC<AddOutcomePageContentProps> = (props) => {
    return (
        <PageContent>
            <ContentHeader title="Tambah Pengeluaran Baru" description="Simpan pengeluaran baru beserta rinciannya" />
            <OutcomeForm action={'outcome.store'} method="post" />
        </PageContent>
    );
};
