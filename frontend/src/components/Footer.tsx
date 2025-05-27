import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        {/* 이용약관 및 개인정보처리방침 링크 제거 */}
        <p>
          © {new Date().getFullYear()} 컴플레토 (Completo). All rights reserved.
        </p>
        <p>DAIC-Shine_muscat Team Project.</p>
      </div>
    </footer>
  );
};

export default Footer;