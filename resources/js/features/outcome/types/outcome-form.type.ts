type OutcomeForm = {
    name: string;
    amount: number;
    time: Date;
    balance_id: string | number;
    category_id: string | number;
    details: OutcomeDetailForm[];
};

type OutcomeDetailForm = {
    name: string;
    price?: string | number;
};
