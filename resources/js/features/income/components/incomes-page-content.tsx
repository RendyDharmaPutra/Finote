import { ContentHeader } from '@/layouts/content-header';
import { PageContent } from '@/layouts/page-content';
import { useIncomeDialog } from '../context/income-dialog-context';
import { DeleteIncomeDialog } from './delete-income-dialog';
import { IncomeFormDialog } from './income-form-dialog';
import { IncomeWrapper } from './income-wrapper';

type IncomePageContentProps = {};

export const IncomePageContent: React.FC<IncomePageContentProps> = (props) => {
    const { showAddDialog, setShowAddDialog, showEditDialog, setShowEditDialog, selectedData } = useIncomeDialog();

    return (
        <PageContent>
            <ContentHeader title="Rangkuman Pemasukan" description="Lacak dan Kelola semua Sumber Pemasukan Kamu" />
            <IncomeWrapper />
            <IncomeFormDialog title="Tambah Pemasukan" action={'income.store'} open={showAddDialog} setOpen={setShowAddDialog} />
            <IncomeFormDialog
                title="Ubah Pemasukan"
                action={'income.update'}
                open={showEditDialog}
                setOpen={setShowEditDialog}
                initialValues={selectedData}
                method="put"
            />
            <DeleteIncomeDialog />
        </PageContent>
    );
};
