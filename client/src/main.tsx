import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './index.css';

import App from './App.tsx';
import LoginPage from './pages/LoginPage.tsx'; // Import the GamePage file
import GameSearch from './pages/GameSearch.tsx' // Import the GamePage file
import HomePage from './pages/HomePage.tsx';
import ErrorPage from './pages/ErrorPage.tsx'; // Import the ErrorPage file
import HomePage from './pages/HomePage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        path:'/HomePage',
        element: <HomePage />
      },
      {
        path: '/Searchgame',
        element: <GameSearch />
      },
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}