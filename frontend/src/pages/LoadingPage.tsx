import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoadingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-completo-ochre/20 text-completo-redwood">
        {/* 소시지 굽기 GIF */}
        <div className="relative mb-8">
          <div className="flex flex-col items-center space-y-6">
            {/* GIF 이미지 */}
            <div className="w-40 h-30 flex items-center justify-center bg-white rounded-2xl shadow-xl p-4">
              <img 
                src="..\src\images\sausage-grilling.gif" 
                alt="소시지를 굽고 있습니다"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
            
            {/* 상태 텍스트 */}
            <div className="text-center">
              <p className="text-xl font-semibold animate-pulse">
                🔥 소시지를 굽고 있습니다...
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm animate-pulse">
          검사가 진행중입니다. 잠시만 기다려주세요...
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default LoadingPage;
