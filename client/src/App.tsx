import { Outlet, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer'

function App() {
  const location = useLocation();

  // Define paths where Nav should be hidden
  const hideNavPaths = ['/']; // Add any paths you want Nav hidden

  const shouldHideNav = hideNavPaths.includes(location.pathname);
  const shouldHideFooter = hideNavPaths.includes(location.pathname);
  return (
    <>
      {!shouldHideNav && <Nav />}
      <main>
        <Outlet />
      </main>
      {!shouldHideFooter && <Footer />}
    </>
  );
}

export default App;
