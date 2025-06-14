import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type DialogContextType<T> = {
    showAddDialog: boolean;
    setShowAddDialog: Dispatch<SetStateAction<boolean>>;
    showEditDialog: boolean;
    setShowEditDialog: Dispatch<SetStateAction<boolean>>;
    showDeleteDialog: boolean;
    setShowDeleteDialog: Dispatch<SetStateAction<boolean>>;
    selectedData?: T;
    setSelectedData: Dispatch<SetStateAction<T | undefined>>;
};

export function createDialogContext<T>() {
    const Context = createContext<DialogContextType<T> | undefined>(undefined);

    const Provider = ({ children }: { children: ReactNode }) => {
        const [showAddDialog, setShowAddDialog] = useState(false);
        const [showEditDialog, setShowEditDialog] = useState(false);
        const [showDeleteDialog, setShowDeleteDialog] = useState(false);
        const [selectedData, setSelectedData] = useState<T>();

        return (
            <Context.Provider
                value={{
                    showAddDialog,
                    setShowAddDialog,
                    showEditDialog,
                    setShowEditDialog,
                    showDeleteDialog,
                    setShowDeleteDialog,
                    selectedData,
                    setSelectedData,
                }}
            >
                {children}
            </Context.Provider>
        );
    };

    const useDialog = () => {
        const context = useContext(Context);
        if (!context) {
            throw new Error('useDialog must be used within its Provider');
        }
        return context;
    };

    return {
        Provider,
        useDialog,
    };
}
