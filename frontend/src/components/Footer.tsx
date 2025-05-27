import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4E7E1] border-t border-[#521C0D]/20 mt-auto"> {/* 배경색, 상단 구분선, 상단 마진 추가 */}
      <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 text-center"> {/* 최대 너비, 수직 패딩, 수평 패딩, 텍스트 중앙 정렬 */}
        <p className="text-sm text-[#521C0D]"> {/* 텍스트 크기 및 색상 적용 */}
          © {new Date().getFullYear()} 컴플레토 (Completo). All rights reserved.
        </p>
        <p className="text-xs text-[#521C0D]/70 mt-1"> {/* 더 작은 텍스트, 약간 옅은 색상, 상단 마진 */}
          DAIC-Shine_muscat Team Project.
        </p>
      </div>
    </footer>
  );
};

export default Footer;