import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ResultsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 bg-completo-ochre/10">
        <h1 className="text-3xl font-bold text-completo-redwood mb-6">과제 양식 평가 결과</h1>
        <p className="text-completo-redwood">이곳에 검사 결과가 표시됩니다.</p>
        {/* 평가 결과 표시 컴포넌트 추가 예정 */}
      </main>
      <Footer />
    </div>
  );
};

export default ResultsPage;