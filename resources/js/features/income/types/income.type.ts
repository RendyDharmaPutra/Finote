type Income = {
    id?: number;
    name: string;
    amount: number;
    time: Date;
    user_id: string;
    balance_id: number;
    balance: Balance;
    category_id: number;
    income_category: Category;
    created_at: Date;
    updated_at: Date;
};
