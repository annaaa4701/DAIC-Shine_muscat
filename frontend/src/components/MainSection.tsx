import React from "react";
import { Link } from "react-router-dom";

const MainSection: React.FC = () => {
  return (
    <main className="flex-grow bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-completo-ochre/5 via-transparent to-completo-red/5"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="block text-completo-redwood leading-tight">
                    과제, 이제{" "}
                    <span className="text-completo-red font-extrabold">
                      컴플레토
                    </span>
                    하세요!
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-completo-mustard">
                  AI가 양식을 완벽하게 체크
                </h2>
              </div>
              
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-completo-redwood/70 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                {`파일 이름부터 문서 속 작은 항목까지, 컴플레토가 꼼꼼하게 확인해 드립니다.\n사소한 실수로 인한 감점은 이제 그만! 제출 전 컴플레토로 완성도를 높이세요.`}
              </p>
              
              <div className="pt-4">
                <Link
                  to="/submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-completo-red rounded-xl shadow-lg hover:bg-completo-red/90 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-completo-red/25"
                >
                  지금 바로 검사 시작하기
                  <span className="text-xl">🌭</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-completo-red bg-completo-red/10 rounded-full uppercase tracking-wider mb-4">
              Completo Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-completo-redwood mb-4">
              컴플레토는 이렇게 도와드려요
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-completo-red to-completo-mustard mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="group bg-white rounded-xl p-5 max-w-sm mx-auto shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-completo-red to-completo-mustard rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-completo-redwood mb-3">
                자동 양식 검사
              </h3>
              <p className="text-sm text-completo-redwood/70 leading-relaxed">
                파일명, 확장자, 페이지 수, 특정 항목 포함 여부 등 교수님이 제시한 조건을 AI가 자동으로 검사합니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white rounded-xl p-5 max-w-sm mx-auto shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-completo-mustard to-completo-ochre rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-completo-redwood mb-3">
                실시간 피드백
              </h3>
              <p className="text-sm text-completo-redwood/70 leading-relaxed">
                제출 전, 어떤 부분이 양식에 맞지 않는지 바로 확인하고 수정할 수 있어 감점 위험을 줄입니다.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white rounded-xl p-5 max-w-sm mx-auto shadow-sm hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-8 h-8 bg-gradient-to-br from-completo-ochre to-completo-red rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-completo-redwood mb-3">
                시간 절약
              </h3>
              <p className="text-sm text-completo-redwood/70 leading-relaxed">
                번거로운 양식 확인 작업을 AI에게 맡기고, 과제 내용에 더 집중하여 효율성을 높일 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
