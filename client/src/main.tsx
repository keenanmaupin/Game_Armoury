
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LoginPage from './pages/LoginPage'; // Import the LoginPage component

// Remove this line if you want to get rid of the global styles
// import './index.css'; 

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>
);
