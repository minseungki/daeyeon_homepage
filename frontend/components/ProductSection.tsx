import Table from "@/components/Table"
import { asset } from "@/lib/asset"

type ProductSectionConfig = {
    title: string;
    subSections: SubSectionConfig[];
};

type SubSectionConfig = {
    type: SectionType;
    title?: string;
    imgSrc?: string;
    items: SubSectionItem[];
};

/**
 * <pre>
 *  DEFAULT : SubSectionItem 개수 만큼 표현
 *      - ex) SubSectionItem이 3개 일 경우 ㅁㅁㅁ
 *      - ex) SubSectionItem이 2개 일 경우 ㅁㅁ
 *      - ex) SubSectionItem이 1개 일 경우 ㅁ
 *  MULTI : 3개 테이블 영역으로 보이지만 2개 테이블 영역, 왼쪽에 두개 오른쪽 1개
 *      - ex)
 *          ┌─────────────────┐
 *            ┌─────┐   ┌───┐
 *              ㅁㅁ       ㅁ
 *            └─────┘   └───┘
 *          └─────────────────┘
 *  HALF : 2개 영역에 절반 씩 나눠 표현하는 경우
 *  - ex)
 *          ┌───────────────┐
 *            ┌───┐   ┌───┐
 *              ㅁ      ㅁ
 *            └───┘   └───┘
 *          └───────────────┘
 * </pre>
 */
export enum SectionType {
    DEFAULT, MULTI, HALF
}

/**
 * <pre>
 * isManyTable : MULTI일 경우 true, 영역에 테이블이 여러개 일 경우
 * isVertical : 세로로 보여질 경우 true, isManyTable이 true일 때 inline으로 보여줄지 그냥 세로로 나열해서 보여줄지 여부
 * </pre>
 */
type SubSectionItem = {
    caption: string;
    isManyTable?: boolean;
    isVertical?: boolean;
    tableConfig: SectionTableConfig;
};

/**
 * body : 테이블 1개면 string[][], isManyTable 이면 테이블 여러 개(string[][][])
 */
type SectionTableConfig = {
    header: string[];
    body: string[][] | string[][][];
};

export default function ProductSection(config: ProductSectionConfig) {
    return (
        <section className="info-section">
            {config.title && (
                <h2 className="section-title">{config.title}</h2>
            )}

            {config.subSections.map((subSection, i) => (
                <div key={i} className="sub-section">
                    {subSection.title ? (<h3>{subSection.title}</h3>) : ""}
                    {subSection.imgSrc ? (<img loading="lazy" decoding="async" src={asset(subSection.imgSrc)} alt={subSection.title ?? config.title} className="box-img"/>) : ""}
                    <ul className="table-group">
                        {subSection.items.map((item, j) => (
                            subSection.type === SectionType.DEFAULT ? (
                                <li key={j}>
                                    {item.caption ? (<div className="table-caption-center">{item.caption}</div>) : ""}
                                    <div>
                                        <Table
                                            class={"vertical-table"}
                                            isDiagonalHeader={true}
                                            header={item.tableConfig.header}
                                            body={item.tableConfig.body as string[][]}
                                        />
                                    </div>
                                </li>
                            ) : subSection.type === SectionType.MULTI ? (
                                <li key={j} className={item.tableConfig.body.length> 0 ? "li-2by1" : ""}>
                                    {item.caption ? (<div className="table-caption-center">{item.caption}</div>) : ""}
                                    {item.isManyTable ? (
                                        <div className="table-wrapper-2by1">
                                            {(item.tableConfig.body as string[][][]).map((innerItem, k) => (
                                                <div key={k}>
                                                    <Table
                                                        class={"vertical-table"}
                                                        isDiagonalHeader={true}
                                                        header={item.tableConfig.header}
                                                        body={innerItem}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div>
                                            <Table
                                                class={"vertical-table"}
                                                isDiagonalHeader={true}
                                                header={item.tableConfig.header}
                                                body={item.tableConfig.body as string[][]}
                                            />
                                        </div>
                                    )}
                                </li>
                            ) : subSection.type === SectionType.HALF ? (
                                <li key={j} className="li-half">
                                    {item.caption ? (<div className="table-caption-center">{item.caption}</div>) : ""}
                                    <div>
                                        <Table
                                            class={"vertical-table"}
                                            isDiagonalHeader={true}
                                            header={item.tableConfig.header}
                                            body={item.tableConfig.body as string[][]}
                                        />
                                    </div>
                                </li>
                            ) : ("")
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}