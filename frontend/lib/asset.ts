const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const ASSET_VERSION = process.env.NEXT_PUBLIC_ASSET_VERSION ?? "";

// public/ 아래 정적 파일 경로에 basePath를 붙여 절대경로로 만든다.
// 예) asset("img/home/logo.png") -> "/daeyeon-homepage/img/home/logo.png"
export function asset(path: string): string {
    return `${BASE_PATH}/${path.replace(/^\/+/, "")}`;
}

// public/css 스타일시트 경로. 빌드마다 바뀌는 버전 쿼리를 붙여 배포 후 캐시를 갱신한다.
// 예) stylesheet("tech.css") -> "/daeyeon-homepage/css/tech.css?v=lx3k9a"
export function stylesheet(name: string): string {
    const url = asset(`css/${name}`);
    return ASSET_VERSION ? `${url}?v=${ASSET_VERSION}` : url;
}
