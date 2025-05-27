import React from 'react';

const LoadingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-completo-ochre/20 text-completo-redwood">
      <h1 className="text-4xl font-bold mb-4">열심히 분석 중... 🌭</h1>
      <p className="text-lg mb-8">컴플레토가 과제 양식을 꼼꼼히 확인하고 있어요!</p>
      {/* 여기에 로딩 애니메이션 (예: 스피너) 추가 */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-completo-red"></div>
      <p className="mt-8 text-sm">잠시만 기다려주세요...</p>
    </div>
  );
};

export default LoadingPage;