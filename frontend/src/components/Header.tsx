import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <h2>
          컴플레토 <span>Completo</span>
        </h2>
      </Link>
      <nav>
        <Link to="/service-info">서비스 소개</Link> {/* 링크 경로 변경 */}
        
        <Link to="/submit">
          <button>
            <span>검사 시작!</span>
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
