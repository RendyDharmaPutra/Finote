import { createDialogContext } from '@/context/dialog-context-factory';

const { Provider: IncomeDialogProvider, useDialog: useIncomeDialog } = createDialogContext<Income>();

export { IncomeDialogProvider, useIncomeDialog };
