import { AddBtn } from '../common/add-btn';

type WrapperHeaderProps = {
    title: string;
    children?: React.ReactNode;
    setShowAddDialog: (val: boolean) => void;
};

export const WrapperHeader: React.FC<WrapperHeaderProps> = (props) => {
    return (
        <div className="flex w-full flex-row justify-between">
            <h6 className="text-lg font-semibold md:text-xl">Daftar Saldo</h6>
            {props.children}
            <AddBtn title="Saldo" onClick={() => props.setShowAddDialog(true)} />
        </div>
    );
};
