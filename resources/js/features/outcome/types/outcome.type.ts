type Outcome = {
    id?: number;
    name: string;
    amount: number;
    time: Date;
    user_id: string;
    balance_id: number;
    balance: Balance;
    category_id: number;
    outcome_category: Category;
    created_at: Date;
    updated_at: Date;
};
