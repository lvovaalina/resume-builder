import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ResumeApp from './ResumeApp'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResumeApp />
    </BrowserRouter>
  </React.StrictMode>
);
