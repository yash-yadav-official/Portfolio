import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Chatbot from './components/chat/Chatbot';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src={`https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_SITE_KEY}`}></script>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Navigate to="/about" />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="chatbot" element={<Chatbot />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
