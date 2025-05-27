/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'completo-ochre': '#C57B27',        // 번 빵색
        'completo-mustard': '#E8AE02',     // 머스터드
        'completo-red': '#CC2522',         // 케첩, 소시지 빨강
        'completo-redwood': '#995F4C',     // 구운 소시지, 고기색
      },
      fontFamily: {
        // 지침에 따라 Lexend와 Noto Sans를 기본으로 사용
        // App.tsx의 인라인 스타일을 여기로 옮겨 일관성 유지 가능
        sans: ['Lexend', '"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Tailwind CSS v4에서는 @tailwindcss/container-queries 플러그인이 필요 없습니다.
  ],
}