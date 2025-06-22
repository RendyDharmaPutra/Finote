import { ContentHeader } from '@/layouts/content-header';
import { PageContent } from '@/layouts/page-content';
import { useState } from 'react';
import { DeleteOutcomeDialog } from '../delete-outcome-dialog';
import { OutcomeDetailList } from './outcome-detail-list';
import { OutcomeDetailMain } from './outcome-detail-main';

type OutcomeDetailPageContentProps = {};

export const OutcomeDetailPageContent: React.FC<OutcomeDetailPageContentProps> = (props) => {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    return (
        <PageContent>
            <ContentHeader title="Detail Pengeluaran" description="Rincian dari Pengeluaran kamu" />
            <OutcomeDetailMain setShowDeleteDialog={setShowDeleteDialog} />
            <OutcomeDetailList />
            <DeleteOutcomeDialog showDialog={showDeleteDialog} setShowDialog={setShowDeleteDialog} />
        </PageContent>
    );
};
