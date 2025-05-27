import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { TestApiResponse } from '../types/api'; // 정의한 타입 import
import './ResultsPage.css'; // 스타일 파일 추가

const ResultsPage: React.FC = () => {
  const location = useLocation();
  // SubmissionPage에서 navigate state로 전달한 apiResponse를 가져옵니다.
  // 타입 단언을 사용하여 state 객체 내의 apiResponse 타입을 명시합니다.
  const apiResponse = location.state?.apiResponse as TestApiResponse | undefined;

  // apiResponse가 없으면 (예: 직접 URL로 접근한 경우) 메인 페이지 등으로 리다이렉트합니다.
  if (!apiResponse) {
    // 또는 오류 메시지를 표시할 수 있습니다.
    // return <p>결과 데이터가 없습니다. 다시 시도해주세요.</p>;
    return <Navigate to="/" replace />;
  }

  // HTML 문자열을 안전하게 렌더링하기 위해 dangerouslySetInnerHTML 사용
  // XSS 공격에 취약할 수 있으므로, 서버에서 오는 HTML이 신뢰할 수 있는 경우에만 사용해야 합니다.
  // 가능하다면 HTML을 파싱하여 안전하게 렌더링하는 라이브러리(예: DOMPurify) 사용을 고려하세요.
  // 여기서는 백엔드 응답이 신뢰 가능하다고 가정합니다.
  return (
    <div className="results-page">
      <Header />
      <main className="results-main">
        <h1 className="results-title">과제 양식 평가 결과</h1>
        
        <section className="results-section">
          <h2 className="section-title">LLM 평가 내용</h2>
          <pre className="chat-response">
            {apiResponse.chat_response}
          </pre>
          <div className="parsed-content-container">
            <div className="parsed-content-left">
              <h3>요구사항 문서</h3>
              <div className="parsed-content" dangerouslySetInnerHTML={{ __html: apiResponse.parsed_request }} />
            </div>
            <div className="parsed-content-right">
              <h3>제출 과제물</h3>
              <div className="parsed-content" dangerouslySetInnerHTML={{ __html: apiResponse.parsed_assignment }} />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ResultsPage;