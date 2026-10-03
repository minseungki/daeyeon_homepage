const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// public/ 아래 정적 파일 경로에 basePath를 붙여 절대경로로 만든다.
// 예) asset("img/home/logo.png") -> "/daeyeon-homepage/img/home/logo.png"
export function asset(path: string): string {
    return `${BASE_PATH}/${path.replace(/^\/+/, "")}`;
}
