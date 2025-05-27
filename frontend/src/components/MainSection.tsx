import React from "react";
import { Link } from "react-router-dom";

const MainSection: React.FC = () => {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-completo-ochre/10 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-completo-redwood sm:text-5xl md:text-6xl">
                <span className="block">
                  과제, 이제{" "}
                  <span className="text-completo-red">컴플레토</span>하세요!
                </span>
                <span className="block text-completo-mustard text-3xl sm:text-4xl md:text-5xl mt-2">
                  AI가 양식을 완벽하게 체크
                </span>
              </h1>
              <p className="mt-6 max-w-md mx-auto text-lg text-completo-redwood/80 sm:text-xl md:mt-8 md:max-w-3xl lg:mx-0">
                파일 이름부터 문서 속 작은 항목까지, 컴플레토가 꼼꼼하게
                확인해 드립니다. 사소한 실수로 인한 감점은 이제 그만! 제출 전
                컴플레토로 완성도를 높이세요.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-completo-red px-8 py-3 text-base font-medium text-white hover:bg-completo-red/90 md:py-4 md:px-10 md:text-lg transition-colors"
                  >
                    지금 바로 검사 시작하기 🌭
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 추가적인 섹션들 (주요 기능 소개, 사용 방법 등) */}
      {/* 예시: 주요 기능 섹션 */}
      <section id="features" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold uppercase tracking-wider text-completo-red">
              Completo Features
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-completo-redwood sm:text-4xl">
              컴플레토는 이렇게 도와드려요
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg bg-completo-ochre/5 p-6 shadow-lg">
              <h3 className="mt-5 text-lg font-medium text-completo-redwood">
                자동 양식 검사
              </h3>
              <p className="mt-2 text-base text-completo-redwood/80">
                파일명, 확장자, 페이지 수, 특정 항목 포함 여부 등 교수님이 제시한
                조건을 AI가 자동으로 검사합니다.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="rounded-lg bg-completo-ochre/5 p-6 shadow-lg">
              <h3 className="mt-5 text-lg font-medium text-completo-redwood">
                실시간 피드백
              </h3>
              <p className="mt-2 text-base text-completo-redwood/80">
                제출 전, 어떤 부분이 양식에 맞지 않는지 바로 확인하고 수정할 수
                있어 감점 위험을 줄입니다.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="rounded-lg bg-completo-ochre/5 p-6 shadow-lg">
              <h3 className="mt-5 text-lg font-medium text-completo-redwood">
                시간 절약
              </h3>
              <p className="mt-2 text-base text-completo-redwood/80">
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