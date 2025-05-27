import React from "react";
import { Link } from "react-router-dom";

const MainSection: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <div>
          <div>
            <div>
              <h1>
                <span>
                  과제, 이제 <span>컴플레토</span>하세요!
                </span>
                <span>AI가 양식을 완벽하게 체크</span>
              </h1>
              <p>
                파일 이름부터 문서 속 작은 항목까지, 컴플레토가 꼼꼼하게
                확인해 드립니다. 사소한 실수로 인한 감점은 이제 그만! 제출 전
                컴플레토로 완성도를 높이세요.
              </p>
              <div>
                <div>
                  <Link to="/submit">
                    지금 바로 검사 시작하기 {/* 이모지 제거 */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 추가적인 섹션들 (주요 기능 소개, 사용 방법 등) */}
      <section id="features">
        <div>
          <div>
            <h2>Completo Features</h2>
            <p>컴플레토는 이렇게 도와드려요</p>
          </div>
          <div>
            {/* Feature 1 */}
            <div>
              <h3>자동 양식 검사</h3>
              <p>
                파일명, 확장자, 페이지 수, 특정 항목 포함 여부 등 교수님이 제시한
                조건을 AI가 자동으로 검사합니다.
              </p>
            </div>
            {/* Feature 2 */}
            <div>
              <h3>실시간 피드백</h3>
              <p>
                제출 전, 어떤 부분이 양식에 맞지 않는지 바로 확인하고 수정할 수
                있어 감점 위험을 줄입니다.
              </p>
            </div>
            {/* Feature 3 */}
            <div>
              <h3>시간 절약</h3>
              <p>
                번거로운 양식 확인 작업을 AI에게 맡기고, 과제 내용에 더 집중하여
                효율성을 높일 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;