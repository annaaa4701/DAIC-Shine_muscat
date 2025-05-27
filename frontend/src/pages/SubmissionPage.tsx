import React from 'react';
import Header from '../components/Header'; // 또는 별도의 레이아웃 컴포넌트 사용
import Footer from '../components/Footer';

const SubmissionPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>과제 제출 페이지</h1>
        <p>이곳에 과제 파일(요구 조건 문서, 과제물)을 업로드하는 UI가 들어갑니다.</p>
        {/* 파일 업로드 폼 컴포넌트 추가 예정 */}
      </main>
      <Footer />
    </div>
  );
};

export default SubmissionPage;