import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SubmissionPage from "./pages/SubmissionPage";
import LoadingPage from "./pages/LoadingPage";
import ResultsPage from "./pages/ResultsPage";
import ServiceInfoPage from "./pages/ServiceInfoPage"; // ServiceInfoPage import 추가

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/submit" element={<SubmissionPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/service-info" element={<ServiceInfoPage />} /> {/* 서비스 소개 페이지 라우트 추가 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;