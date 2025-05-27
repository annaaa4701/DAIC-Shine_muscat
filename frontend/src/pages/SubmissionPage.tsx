import React from 'react';
import Header from '../components/Header'; // 또는 별도의 레이아웃 컴포넌트 사용
import Footer from '../components/Footer';

const SubmissionPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 bg-completo-ochre/10">
        <h1 className="text-3xl font-bold text-completo-redwood mb-6">과제 제출 페이지</h1>
        <p className="text-completo-redwood">이곳에 과제 파일(요구 조건 문서, 과제물)을 업로드하는 UI가 들어갑니다.</p>
        {/* 파일 업로드 폼 컴포넌트 추가 예정 */}
      </main>
      <Footer />
    </div>
  );
};

export default SubmissionPage;