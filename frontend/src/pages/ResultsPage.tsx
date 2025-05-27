import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ResultsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>과제 양식 평가 결과</h1>
        <p>이곳에 검사 결과가 표시됩니다.</p>
        {/* 평가 결과 표시 컴포넌트 추가 예정 */}
      </main>
      <Footer />
    </div>
  );
};

export default ResultsPage;