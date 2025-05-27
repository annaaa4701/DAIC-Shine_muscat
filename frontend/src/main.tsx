// filepath: c:\Private\git\DAIC-Shine_muscat\frontend\src\main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css' // Tailwind CSS를 포함한 전역 CSS

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  console.error("Failed to find the root element. Ensure your index.html has <div id='root'></div>.");
}