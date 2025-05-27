import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-completo-redwood/30 bg-completo-red px-6 sm:px-10 py-4"> {/* 임시로 bg-completo-red 적용 */}
      <Link to="/" className="flex items-center gap-3 text-completo-redwood hover:text-completo-red transition-colors">
        {/* SVG 아이콘 제거 */}
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
