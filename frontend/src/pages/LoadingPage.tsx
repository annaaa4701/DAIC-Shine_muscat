import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SubmissionPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-completo-ochre/20 text-completo-redwood">
        <h1 className="text-4xl font-bold mb-4">과제 제출 페이지</h1>
        <p className="text-lg mb-8">이곳에 과제 파일(요구 조건 문서, 과제물)을 업로드하는 UI가 들어갑니다.</p>
        <p className="mt-8 text-sm">잠시만 기다려주세요...</p>
        {/* 파일 업로드 폼 컴포넌트 추가 예정 */}
      </main>
      <Footer />
    </div>
  );
};

export default SubmissionPage;