import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-completo-ochre/10 text-completo-redwood/70">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4">
        <a
          className="text-sm hover:text-completo-red transition-colors"
          href="/terms" // 내부 라우팅 예시
        >
          이용약관
        </a>
        <a
          className="text-sm hover:text-completo-red transition-colors"
          href="/privacy" // 내부 라우팅 예시
        >
          개인정보처리방침
        </a>
        {/* <a className="text-sm hover:text-completo-red transition-colors" href="#">
          FAQ
        </a> */}
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} 컴플레토 (Completo). All rights reserved.
      </p>
      <p className="text-xs mt-1">DAIC-Shine_muscat Team Project.</p>
    </div>
  </footer>
);

export default Footer;