import { createContext, ReactNode, useContext, useState } from 'react';

type BalanceDialogContextType = {
    showAddDialog: boolean;
    setShowAddDialog: (value: boolean) => void;
    showEditDialog: boolean;
    setShowEditDialog: (value: boolean) => void;
    selectedBalance?: BalanceForm;
    setSelectedBalance: (balance?: BalanceForm) => void;
};

const BalanceDialogContext = createContext<BalanceDialogContextType | undefined>(undefined);

export const BalanceDialogProvider = ({ children }: { children: ReactNode }) => {
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [selectedBalance, setSelectedBalance] = useState<BalanceForm>();

    return (
        <BalanceDialogContext.Provider
            value={{
                showAddDialog,
                setShowAddDialog,
                showEditDialog,
                setShowEditDialog,
                selectedBalance,
                setSelectedBalance,
            }}
        >
            {children}
        </BalanceDialogContext.Provider>
    );
};

export const useBalanceDialog = () => {
    const context = useContext(BalanceDialogContext);
    if (!context) throw new Error('useBalanceDialog must be used within a BalanceDialogProvider');
    return context;
};
