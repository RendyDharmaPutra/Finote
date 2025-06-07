type PageContentProps = {
    children: React.ReactNode;
};

export const PageContent = (props: PageContentProps) => {
    return <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">{props.children}</div>;
};
