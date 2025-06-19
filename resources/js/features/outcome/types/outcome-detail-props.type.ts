type OutcomeDetailPageProps = {
    outcome: Outcome;
};

type Outcome = RawOutcome & {
    detail_outcomes: detail_outcomes[];
};

type detail_outcomes = {
    id: number;
    name: string;
    price?: number;
};
