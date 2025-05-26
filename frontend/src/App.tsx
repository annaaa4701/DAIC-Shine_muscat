import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#131d20] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <MainSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;