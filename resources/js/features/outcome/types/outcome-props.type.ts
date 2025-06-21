type OutcomesPageProps = {
    outcomes: OutcomeList[];
    balances: Balance[];
    categories: Category[];
};

type OutcomeList = RawOutcome & {
    detail_outcomes_count: number;
};
