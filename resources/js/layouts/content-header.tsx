type ContentHeaderProps = {
    title: string;
    description: string;
};

export const ContentHeader = (props: ContentHeaderProps) => {
    return (
        <section className="flex w-full flex-col gap-1">
            <h5 className="text-2xl font-semibold text-gray-900 md:text-3xl dark:text-gray-100">{props.title}</h5>
            <p className="text-base text-gray-700 md:text-lg dark:text-gray-300">{props.description}</p>
        </section>
    );
};
