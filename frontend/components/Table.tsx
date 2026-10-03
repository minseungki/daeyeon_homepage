export type TableConfig = {
    class: string;
    isDiagonalHeader: boolean;
    header: string[];
    body: string[][];
};

export default function Table(config: TableConfig) {
    return (
        <table className={config.class}>
            <thead>
            <tr>
                {config.isDiagonalHeader && (
                    <th className="diagonal-header">
                        <span className="left-bottom">SIZE</span>
                        <span className="right-top">DIMENSION</span>
                    </th>
                )}
                {config.header.map((thItem, k) => (
                    <th key={k}>{thItem}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {config.body.map((tbItem, l) => (
                <tr key={l}>
                    {tbItem.map((tdItem, o) => (
                        <td key={o}>{tdItem}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}