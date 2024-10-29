import React from "react";
import "./HomePage.css";
import { Link } from 'react-router-dom';
const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Left Sidebar for Genres */}
      <aside className="sidebar">
        <h2 className="sidebar-header">Genres</h2>
        <nav className="genre-links">
          <a href="#horror">Horror</a>
          <a href="#adventure">Adventure</a>
          <a href="#rpg">RPG</a>
          <a href="#puzzles">Puzzles</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <h1 className="logo">
            {"Game Armoury".split("").map((char, index) => (
              <span key={index} className={`colored-letter letter-${index}`}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <nav className="nav-links">
            <a href="#home">HomePage</a>
            <Link to= '/About'>About</Link>
            <a href="#profile">Profile</a>
          </nav>
        </header>

        {/* Title Section */}
        <h1 className="title">
          {"Explore Games".split("").map((char, index) => (
            <span key={index} className={`rainbow-letter rainbow-${index % 7}`}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Search Box */}
        <div className="search-box">
          <input type="text" className="search-input" placeholder="Search games..." />
          <button className="search-button">Search</button>

          <div className="footer">
            <span className="footer-text">2024</span>
            <span className="footer-logo">
              {/* <!-- Multi-colored "Armoury" --> */}
              {"Armoury".split("").map((char, index) => (
                <span key={index} className={`colored-letter letter-${index}`}>
                  {char}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
