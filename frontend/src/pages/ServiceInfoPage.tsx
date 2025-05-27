import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServiceInfoPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>서비스 소개</h1>
        <p>컴플레토는 AI 기반 과제 제출 양식 자동 검사 서비스입니다.</p>
        <p>주요 기능:</p>
        <ul>
          <li>과제 조건 자동 파싱 및 구조화</li>
          <li>제출물 자동 검증 및 실시간 피드백</li>
          <li>조건 해석 불확실성 안내</li>
        </ul>
        <p>
          학생들은 컴플레토를 통해 과제 제출 전 파일명, 확장자, 문서 내 항목 등
          세부 조건을 실시간으로 확인하고 오류를 바로잡을 수 있어, 사소한 실수로
          인한 감점을 방지할 수 있습니다.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceInfoPage;