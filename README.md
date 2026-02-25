# 대연 홈페이지 프로젝트

## 개발 환경
- UI 라이브러리 : [React.js](https://ko.react.dev/) 19.2.3
- 웹 프레임워크 : [Next.js](https://nextjs.org/) 16.1.6

## 프로젝트 구조
```
.github
└─ workflows
   └─ pages.yml               # GitHub Actions 배포 설정 파일
frontend/
├─ app/
│  ├─ (home)                  # 메인 전용 그룹 (폴더명에 괄호가 있으면 URL에는 안 보임)
│  │  ├─ layout.tsx           # 홈 레이아웃
│  │  └─ page.tsx             # "/" 홈 페이지(컨텐츠 + 페이지 SEO)
│  ├─ (views)                 # 서브페이지 전용 그룹 (폴더명에 괄호가 있으면 URL에는 안 보임)
│  │  ├─ about/
│  │  │  └─ ceo
│  │  │    └─ page.tsx        # "/about/ceo" 페이지(컨텐츠 + 페이지 SEO)
│  │  ├─ contact/             # "/contact" 페이지
│  │  ├─ product/             # "/product" 페이지
│  │  ├─ tech/                # "/tech" 페이지
│  │  └─ layout.tsx           # 서브 레이아웃
│  ├─ kakao-map               # 카카오맵 컴포넌트
│  ├─ favicon.ico             # 파비콘
│  └─ globals.css             # 전역 CSS
│
├─ components/
│  ├─ Footer.tsx              # 푸터
│  ├─ Head.tsx                # 헤드(공통 스크립트 로드)
│  ├─ Header.tsx              # 헤더(브랜드 + 네비)
│  ├─ Nav.tsx                 # 네비 메뉴
│  ├─ PageShell.tsx           # 서브 페이지 레이아웃 컴포넌트(SubVisual + content)
│  ├─ Slider.tsx              # 메인 슬라이더
│  ├─ SubVisual.tsx           # 서브 비주얼 컴포넌트
│  └─ YouTubeEmbed.tsx        # 공통 유튜브 뷰어 컴포넌트
│
├─ config/
│  └─ site.ts                 # baseUrl, 기본 OG 이미지, 네이버 verification 등 공통 상수
│
├─ lib/
│  └─ seo.ts                  # 페이지 SEO 생성 헬퍼(중복 줄이기)
│
├─ public/
│  └─ css/                    # css 폴더
│  └─ img/                    # 이미지 폴더
│
├─ next.config.js
├─ package.json
└─ tsconfig.json
```

## 배포
- Github Actions 자동 배포 (개발)
- .github/workflows/pages.yml 파일 참고

## 페이지 개발
``` typescript jsx
import type { Metadata } from "next";
import { buildSeoByPath } from "@/lib/seo";
import PageShell from "@/components/PageShell";

// seo path 설정
export const metadata: Metadata = buildSeoByPath("/about/ceo");

export default function AboutCeoPage() {
    return (
        <>
            {/* css 로드 */}
            <link rel="stylesheet" href="/css/about.css"/>

            <PageShell subVisual={{
                title: "CEO 인사말",
                message: "고객과 함께 성장하는 기업, (주)대연입니다.",
                pageClass: "about"
            }}>
            
            {/* 컨텐츠 영역 */}
            
            </PageShell>

        </>
    );
}
```
- buildSeoByPath("/about") : seo 라우터 설정
- export default function AboutCeoPage() { : 함수명 맞게 입력 (디버깅 / 에러 스택 / React DevTools에서 함수명이 노출)
- <> </> : <React.Fragment> </React.Fragment> 축약
- jsx 문법을 사용해서 class -> className 형태로 작성해야함
  - ex) <section className="ceo-intro-flex">
- PageShell
  - subVisual
    - title : sub visual title 문구
    - message : sub visual message 문구 
    - pageClass : sub visual page 배경 이미지 class 명(페이지 그룹 입력)
      - 신규로 추가시 해당 파일 인라인 스타일 수정 필요
  - 컨텐츠 영역
    - 해당 영역에 컨텐츠 작성

### 카카오 맵
- /app/kakao-map/page.tsx
- /component/Head.tsx
``` typescript jsx
파일명 : /component/Head.tsx

import Script from "next/script";

export default function Head() {
    let appkey = process.env.KAKAO_NEXT_PUBLIC_APPKEY;
    const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return (
        <>
            <Script
                strategy="beforeInteractive"
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${appkey}&libraries=services&autoload=false`}
            ></Script>

            <base href={base ? `${base}/` : "/"} />;
        </>
    );
}
```
- 카카오맵 키는 GitHub > Settings > Environments 안에 설정되어있고
- 해당 키는 로컬 .env에 넣어서 로컬에서 사용

### 유튜브 영상
- /components/YouTubeEmbed.tsx 파일을 이용하여 생성한다.
``` typescript jsx
import YouTubeEmbed from "@/components/YouTubeEmbed";

<YouTubeEmbed videoId="bd9yLroxno8" title="DAEYOUN 홍보 영상"/>
```

### 이미지 / CSS 로드
``` typescript jsx
파일명 : /component/Head.tsx

import Script from "next/script";

export default function Head() {
    let appkey = process.env.KAKAO_NEXT_PUBLIC_APPKEY;
    const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return (
        <>
            <Script
                strategy="beforeInteractive"
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${appkey}&libraries=services&autoload=false`}
            ></Script>

            <base href={base ? `${base}/` : "/"} />;
        </>
    );
}
```
- GitHub Actions로 배포를 하게 되면 url root경로가 프로젝트명으로 잡혀서 base 태그를 사용
  - https://[계정].github.io/[프로젝트명]
- 이에 img/css 로드는 상대 경로를 사용한다.