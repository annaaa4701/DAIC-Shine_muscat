import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { TestApiResponse } from '../types/api'; // 정의한 타입 import

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
    <div>
      <Header />
      <main>
        <h1>과제 양식 평가 결과</h1>
        
        <section>
          <h2>LLM 평가 내용</h2>
          {/* chat_response는 일반 텍스트일 가능성이 높으므로 그대로 표시하거나, 
              만약 HTML이라면 dangerouslySetInnerHTML을 사용합니다. 
              백엔드 응답 형식을 정확히 확인해야 합니다.
              여기서는 일반 텍스트로 가정합니다. */}
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', border: '1px solid #ccc', padding: '10px', backgroundColor: '#f9f9f9' }}>
            {apiResponse.chat_response}
          </pre>
        </section>

        <hr style={{ margin: '20px 0' }} />

        <section>
          <h2>요구사항 문서 (HTML 파싱 결과)</h2>
          <div dangerouslySetInnerHTML={{ __html: apiResponse.parsed_request }} />
        </section>
        
        <hr style={{ margin: '20px 0' }} />

        <section>
          <h2>제출 과제물 (HTML 파싱 결과)</h2>
          <div dangerouslySetInnerHTML={{ __html: apiResponse.parsed_assignment }} />
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ResultsPage;