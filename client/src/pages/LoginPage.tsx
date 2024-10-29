import React, { useState } from "react";
import "./LoginPage.css";
import auth from "../utils/auth";

const LoginPage: React.FC = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleMode = () => {
    setIsRegisterMode((prevMode) => !prevMode);
  };

  const titleText = isRegisterMode ? "Register" : "Login";

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        if (res.status == 401) {
          alert("Wrong credentials");
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        auth.login(data.token);
      });
  };

  return (
    <div className="login-page">
      <div className="background"></div>
      {/* Header Section */}
      <header className="site-header">
        <h1>
          {"Game Armoury".split("").map((char, index) => (
            <span key={index} className={`rainbow-letter rainbow-${index % 7}`}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </header>
      <div className="login-box">
        <h2>
          {titleText.split("").map((char, index) => (
            <span key={index} className={`rainbow-letter rainbow-${index % 7}`}>
              {char}
            </span>
          ))}
        </h2>
        <form onSubmit={isRegisterMode ? undefined : handleLogin}>
          <div className="input-group">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {isRegisterMode && (
            <div className="input-group">
              <input type="email" placeholder="Email" required />
            </div>
          )}
          <div className="buttons">
            <button type="button" className="register-btn" onClick={toggleMode}>
              {isRegisterMode ? "Back to Login" : "Register"}
            </button>
            {!isRegisterMode && (
              <button type="submit" className="login-btn">
                Login
              </button>
            )}
            {isRegisterMode && (
              <button type="submit" className="login-btn">
                Sign Up
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
