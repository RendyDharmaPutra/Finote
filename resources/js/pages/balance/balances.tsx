type BalanacesPageProps = {
    userId: any;
};

const BalancesPage: React.FC<BalanacesPageProps> = (props) => {
    return <h1>{props.userId}</h1>;
};

export default BalancesPage;
