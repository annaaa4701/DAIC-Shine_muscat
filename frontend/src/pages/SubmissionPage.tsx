import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import type { TestApiResponse } from '../types/api'; // 정의한 타입 import

const SubmissionPage: React.FC = () => {
  const [docsReqFile, setDocsReqFile] = useState<File | null>(null);
  const [docsAssignFile, setDocsAssignFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleDocsReqChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setDocsReqFile(event.target.files[0]);
    }
  };

  const handleDocsAssignChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setDocsAssignFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');

    if (!docsReqFile || !docsAssignFile) {
      setMessage('두 개의 파일을 모두 선택해주세요.');
      return;
    }

    setIsLoading(true);
    navigate('/loading');

    const formData = new FormData();
    formData.append('docs_req', docsReqFile);
    formData.append('docs_assign', docsAssignFile);

    try {
      const response = await fetch('http://localhost:8000/test', {
        method: 'POST',
        body: formData,
      });

      setIsLoading(false);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: '알 수 없는 서버 오류가 발생했습니다.' }));
        throw new Error(errorData.detail || `서버 오류: ${response.status}`);
      }

      const result: TestApiResponse = await response.json(); // API 응답 타입 적용
      
      // 성공적으로 결과를 받으면 결과 페이지로 이동하고 상태를 전달합니다.
      // navigate 함수의 state 객체에 apiResponse 키로 결과 데이터를 전달합니다.
      navigate('/results', { state: { apiResponse: result } });

    } catch (error) {
      setIsLoading(false);
      if (error instanceof Error) {
        setMessage(`오류: ${error.message}`);
      } else {
        setMessage('파일 업로드 중 알 수 없는 오류가 발생했습니다.');
      }
      // 오류 발생 시 로딩 페이지에서 현재 제출 페이지로 다시 돌려보내거나,
      // 메인 페이지로 이동시키는 등의 처리를 할 수 있습니다.
      // 예: navigate('/submit', { replace: true }); // 현재 페이지에 머무르며 메시지 표시
    }
  };

  return (
    <div>
      <Header />
      <main>
        <h1>과제 제출 페이지</h1>
        <p>이곳에 과제 파일(요구 조건 문서, 과제물)을 업로드하는 UI가 들어갑니다.</p>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="docs_req">요구 조건 문서 (docs_req):</label>
            <input type="file" id="docs_req" onChange={handleDocsReqChange} accept=".pdf,.doc,.docx,.hwp,.txt" />
          </div>
          <div>
            <label htmlFor="docs_assign">과제물 (docs_assign):</label>
            <input type="file" id="docs_assign" onChange={handleDocsAssignChange} accept=".pdf,.doc,.docx,.hwp,.txt" />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? '제출 중...' : '제출하기'}
          </button>
        </form>
        {message && <p>{message}</p>}
      </main>
      <Footer />
    </div>
  );
};

export default SubmissionPage;