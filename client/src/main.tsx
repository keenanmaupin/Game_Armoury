import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LoginPage from './pages/LoginPage';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
);
