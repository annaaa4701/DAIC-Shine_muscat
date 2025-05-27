/// <reference types="vite/client" />

// CSS Modules
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// 일반 CSS 파일 import를 위한 선언 (만약 CSS Modules만 사용하지 않는다면)
// 현재 프로젝트에서는 index.css를 직접 import 하므로 이 부분이 필요할 수 있습니다.
declare module '*.css' {
  const content: any; // 또는 `Record<string, string>` 등 더 구체적인 타입
  export default content;
}