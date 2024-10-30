import { Link } from "react-router-dom";


const Nav = () => {

  return (
    <header className="header">
    <h1 className="logo">
      {"Game Armoury".split("").map((char, index) => (
        <span key={index} className={`colored-letter letter-${index}`}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
    <nav className="nav-links">
      <Link to='/Homepage' >Home Page</Link>
      <Link to='/Profile'>Profile</Link>
      <Link to= '/About'>About</Link>
    </nav>
  </header>
  );
};

export default Nav;
