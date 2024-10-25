import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage: React.FC = () => {
    const [isRegisterMode, setIsRegisterMode] = useState(false);

    const toggleMode = () => {
        setIsRegisterMode((prevMode) => !prevMode);
    };

    return (
        <div className="login-page">
            <div className="background"></div>
            <div className="login-box">
                <h2>{isRegisterMode ? 'Register' : 'Login'}</h2>
                <form>
                    <div className="input-group">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    {/* Additional input field for register mode */}
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
