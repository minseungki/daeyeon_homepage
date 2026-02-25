import SubVisual from "@/components/SubVisual";

type SubVisualConfig = {
    title: string;
    message: string;
    pageClass?: string;
};

export default function DefaultPageShell({ subVisual, children }: {
    subVisual: SubVisualConfig;
    children: React.ReactNode;
}) {
    return (
        <>
            <SubVisual
                title={subVisual.title}
                message={subVisual.message}
                pageClass={subVisual.pageClass ?? ""}
            />
            <div className="container content-wrap">{children}</div>
        </>
    );
}