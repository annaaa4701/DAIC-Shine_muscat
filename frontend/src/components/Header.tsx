import React from "react";
import { Link } from "react-router-dom"; // 라우팅을 위해 Link 사용

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-completo-redwood/30 bg-completo-red px-6 sm:px-10 py-4"> {/* 임시로 bg-completo-red 적용 */}
      <Link to="/" className="flex items-center gap-3 text-completo-redwood hover:text-completo-red transition-colors">
        {/* SVG 아이콘 (핫도그 모양 또는 C 로고 등) - Heroicons 또는 Lucide React에서 찾아보세요. */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-completo-red">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 4.006 4.006 0 0 0-3.662-.138 4.006 4.006 0 0 0-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662s.046 2.453.138 3.662m14.324 0a4.006 4.006 0 0 0-3.7-3.7 4.006 4.006 0 0 0-3.662.138m3.7 3.7c.092-1.21.138-2.43.138-3.662m-14.324 0a4.006 4.006 0 0 0 3.7 3.7m-3.7-3.7c-.092 1.21-.138 2.43-.138 3.662m14.324 0c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7m-3.7-3.7a4.006 4.006 0 0 0 3.662-.138m0-14.324c1.232 0 2.453.046 3.662.138a4.006 4.006 0 0 0 3.7-3.7m-3.7 3.7c-1.21.092-2.43.138-3.662.138m14.324 0c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 0 0-3.7-3.7M4.5 12c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 0 0 3.7 3.7m0-14.324c1.21.092 2.43.138 3.662.138" />
        </svg>
        <h2 className="text-xl font-bold leading-tight tracking-tight">
          컴플레토 <span className="text-completo-mustard">Completo</span>
        </h2>
      </Link>
      <nav className="flex items-center gap-6">
        <Link
          className="text-sm font-medium text-completo-redwood hover:text-completo-red transition-colors"
          to="/"
        >
          서비스 소개
        </Link>
        <Link
          className="text-sm font-medium text-completo-redwood hover:text-completo-red transition-colors"
          to="/submit"
        >
          과제 검사하기
        </Link>
        {/* <a className="text-sm font-medium text-completo-redwood hover:text-completo-red transition-colors" href="#pricing">Pricing</a>
        <a className="text-sm font-medium text-completo-redwood hover:text-completo-red transition-colors" href="#contact">Contact</a> */}
        <Link to="/submit">
          <button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-completo-red text-white text-sm font-bold leading-normal tracking-wide hover:bg-completo-red/80 transition-colors">
            <span className="truncate">검사 시작!</span>
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
