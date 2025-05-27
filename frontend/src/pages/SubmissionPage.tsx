import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import type { TestApiResponse } from '../types/api';

const SubmissionPage: React.FC = () => {
  const [docsReqFile, setDocsReqFile] = useState<File | null>(null);
  const [docsAssignFile, setDocsAssignFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [isDragging, setIsDragging] = useState<boolean>(false);
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

      const result: TestApiResponse = await response.json();
      navigate('/results', { state: { apiResponse: result } });

    } catch (error) {
      setIsLoading(false);
      if (error instanceof Error) {
        setMessage(`오류: ${error.message}`);
      } else {
        setMessage('파일 업로드 중 알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, type: 'req' | 'assign') => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files?.length) {
      if (type === 'req') {
        setDocsReqFile(files[0]);
      } else {
        setDocsAssignFile(files[0]);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-8 py-8"> {/* px-4에서 px-8로 변경 */}
        <h1 className="text-3xl font-bold text-center mb-8">과제 제출</h1>
        <div className="max-w-2xl mx-auto px-4"> {/* px-4 추가 */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-16">
            {/* 요구사항 문서 업로드 */}
            <div
              className={`
                flex flex-col items-center justify-center min-h-[160px] w-full mx-auto
                border-2 border-dashed rounded-2xl p-8 text-center  // p-6에서 p-8로 변경
                transition-all duration-200 ease-in-out shadow-md
                ${isDragging ? 'bg-indigo-100 border-indigo-500' : 'bg-white'}
                ${docsReqFile 
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 hover:border-indigo-400'}
              `}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, 'req')}
            >
              <input
                type="file"
                id="docs_req"
                onChange={handleDocsReqChange}
                accept=".pdf,.doc,.docx,.hwp,.txt"
                className="hidden"
              />
              <div className="space-y-2">
                <p className="text-lg font-medium">요구사항 문서</p>
                <p className="text-sm text-gray-500">
                  {docsReqFile ? docsReqFile.name : 'PDF, DOC, DOCX, HWP, TXT (드래그하여 업로드)'}
                </p>
                <button
                  type="button"
                  onClick={() => document.getElementById('docs_req')?.click()}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                >
                  파일 선택
                </button>
              </div>
            </div>

            {/* 과제 파일 업로드 */}
            <div
              className={`
                flex flex-col items-center justify-center min-h-[160px] w-full mx-auto
                border-2 border-dashed rounded-2xl p-8 text-center  // p-6에서 p-8로 변경
                transition-all duration-200 ease-in-out shadow-md
                ${isDragging ? 'bg-indigo-100 border-indigo-500' : 'bg-white'}
                ${docsAssignFile 
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 hover:border-indigo-400'}
              `}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, 'assign')}
            >
              <input
                type="file"
                id="docs_assign"
                onChange={handleDocsAssignChange}
                accept=".pdf,.doc,.docx,.hwp,.txt"
                className="hidden"
              />
              <div className="space-y-2">
                <p className="text-lg font-medium">과제 파일</p>
                <p className="text-sm text-gray-500">
                  {docsAssignFile ? docsAssignFile.name : 'PDF, DOC, DOCX, HWP, TXT (드래그하여 업로드)'}
                </p>
                <button
                  type="button"
                  onClick={() => document.getElementById('docs_assign')?.click()}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                >
                  파일 선택
                </button>
              </div>
            </div>
            
            {/* 제출 버튼 */}
            <div className="flex justify-center items-center w-full mt-8">
              <button
                type="submit"
                disabled={isLoading || !docsReqFile || !docsAssignFile}
                className={`
                  w-1/3 px-8 py-4 rounded-xl text-white font-medium text-lg
                  transition-all duration-200 ease-in-out
                  ${isLoading || !docsReqFile || !docsAssignFile
                    ? 'bg-gray-400 cursor-not-allowed opacity-50'
                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'}
                `}
              >
                {isLoading ? '제출 중...' : '제출하기'}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubmissionPage;
