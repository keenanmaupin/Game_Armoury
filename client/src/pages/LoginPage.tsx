import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage: React.FC = () => {
    const [isRegisterMode, setIsRegisterMode] = useState(false);

    const toggleMode = () => {
        setIsRegisterMode((prevMode) => !prevMode);
    };

    const titleText = isRegisterMode ? "Register" : "Login";

    return (
        <div className="login-page">
            <div className="background"></div>
            {/* Header Section */}
            <header className="site-header">
                <h1>
                    {"Game Armoury".split('').map((char, index) => (
                        <span key={index} className={`rainbow-letter rainbow-${index % 7}`}>
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </h1>
            </header>
            <div className="login-box">
                <h2>
                    {titleText.split('').map((char, index) => (
                        <span key={index} className={`rainbow-letter rainbow-${index % 7}`}>
                            {char}
                        </span>
                    ))}
                </h2>
                <form>
                    <div className="input-group">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    {isRegisterMode && (
                        <div className="input-group">
                            <input type="email" placeholder="Email" required />
                        </div>
                    )}
                    <div className="buttons">
                        <button
                            type="button"
                            className="register-btn"
                            onClick={toggleMode}
                        >
                            {isRegisterMode ? 'Back to Login' : 'Register'}
                        </button>
                        {!isRegisterMode && (
                            <button type="submit" className="login-btn">Login</button>
                        )}
                        {isRegisterMode && (
                            <button type="submit" className="login-btn">Sign Up</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
