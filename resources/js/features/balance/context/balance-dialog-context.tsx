import { createDialogContext } from '@/context/dialog-context-factory';

const { Provider: BalanceDialogProvider, useDialog: useBalanceDialog } = createDialogContext<BalanceForm>();

export { BalanceDialogProvider, useBalanceDialog };
