type OutcomesPageProps = {
    outcomes: Outcomes;
    balances: Balance[];
    categories: Category[];
};

type Outcomes = RawOutcome &
    {
        detail_outcomes_count: number;
    }[];
