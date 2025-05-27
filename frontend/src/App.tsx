import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SubmissionPage from "./pages/SubmissionPage";
import LoadingPage from "./pages/LoadingPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <Router>
      <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/submit" element={<SubmissionPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;