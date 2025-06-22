import { ContentHeader } from '@/layouts/content-header';
import { PageContent } from '@/layouts/page-content';
import { usePage } from '@inertiajs/react';
import { OutcomeForm } from './form/outcome-form';

type EditOutcomePageContentProps = {};

export const EditOutcomePageContent: React.FC<EditOutcomePageContentProps> = (props) => {
    const { outcome } = usePage<OutcomeDetailPageProps>().props;

    return (
        <PageContent>
            <ContentHeader title="Ubah Pengeluaran" description="Perbarui pengeluaran beserta rinciannya" />
            <OutcomeForm initialValues={outcome} action={'outcome.update'} method="put" />
        </PageContent>
    );
};
