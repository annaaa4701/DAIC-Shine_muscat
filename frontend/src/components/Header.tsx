import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../assets/completo_logo.png";

const Header: React.FC = () => {
  return (
    <header className="bg-[#F4E7E1] text-[#521C0D] sticky top-0 z-50 border-b border-[#521C0D]/10 w-full">
      <div className="max-w-md mx-auto grid grid-cols-[1fr_2fr_1fr] items-center px-4 sm:px-6 py-6 sm:py-8 lg:py-10">
        {/* 로고 부분에 왼쪽 패딩 추가 */}
        <div className="justify-self-start pl-4 sm:pl-6 lg:pl-8">
          <Link
            to="/"
            className="text-lg sm:text-xl font-semibold tracking-tight text-[#521C0D] no-underline"
          >
            <img
              src={logoImage}
              alt="컴플레토 로고"
              className="h-6 w-auto max-w-[90px] sm:h-9 sm:max-w-[120px] lg:h-12 lg:max-w-[150px] 
    transition-transform duration-300 hover:scale-110"
            />
          </Link>
        </div>

        {/* 2번째 컬럼: 검사 시작 버튼 (중앙, 강조) - 세로 크기 대폭 증가 */}
        <div className="justify-self-center">
          <Link to="/submit" className="no-underline">
            <button
              className={[
                "bg-[#FF9B45] text-white border-2 border-[#FF9B45] rounded-full",
                "shadow-lg hover:shadow-xl",
                // 폰트 크기를 더 크게 증가
                "text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold",
                // 세로 패딩을 대폭 증가
                "px-6 sm:px-10 lg:px-14 py-5 sm:py-7 lg:py-9",
                "min-w-[180px] sm:min-w-[220px] lg:min-w-[260px]",
                // 최소 높이도 추가하여 세로 크기 확실히 보장
                "min-h-[60px] sm:min-h-[70px] lg:min-h-[80px]",
                // 호버 효과 강화
                "hover:bg-[#D5451B] hover:border-[#D5451B] hover:scale-105",
                "focus:outline-none focus:ring-4 focus:ring-[#FF9B45] focus:ring-opacity-30",
                "transition-all duration-300 ease-in-out transform",
                "active:scale-95",
                // 수직 정렬 개선
                "flex items-center justify-center",
              ].join(" ")}
            >
              검사 시작!
            </button>
          </Link>
        </div>

        {/* 서비스 소개 부분에 오른쪽 패딩 추가 */}
        <nav className="justify-self-end pr-4 sm:pr-6 lg:pr-8">
          <NavLink
            to="/service-info"
            className={({ isActive }) =>
              `text-xs sm:text-sm font-medium transition-colors duration-200 ease-in-out pb-0.5 no-underline
              ${
                isActive
                  ? "text-[#FF9B45] border-b-2 border-[#FF9B45]"
                  : "text-[#521C0D] hover:text-[#FF9B45]"
              }`
            }
          >
            서비스 소개
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;