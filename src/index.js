import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ResumeApp from './components/ResumeApp'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResumeApp />
    </BrowserRouter>
  </React.StrictMode>
);
