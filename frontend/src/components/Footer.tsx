import React from "react";

const Footer: React.FC = () => (
  <footer className="flex justify-center">
    <div className="flex max-w-[960px] flex-1 flex-col">
      {/* Stitch HTML 구조와 유사하게 내부 footer 태그를 div로 변경하거나 유지할 수 있습니다. 여기서는 유지합니다. */}
      <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
        <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
          <a
            className="text-[#98b9c3] text-base font-normal leading-normal min-w-40"
            href="/terms" // 내부 라우팅 예시
          >
            Terms of Service
          </a>
          <a
            className="text-[#98b9c3] text-base font-normal leading-normal min-w-40"
            href="/privacy" // 내부 라우팅 예시
          >
            Privacy Policy
          </a>
        </div>
        <p className="text-[#98b9c3] text-base font-normal leading-normal">
          © {new Date().getFullYear()} PlatoFormChecker. All rights reserved.
        </p>
      </footer>
    </div>
  </footer>
);

export default Footer;