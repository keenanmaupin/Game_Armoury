import React from 'react';
import './LoginPage.css';

const LoginPage: React.FC = () => {
    return (
        <div className="background">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="buttons">
                        <button type="button" className="register-btn">Register</button>
                        <button type="submit" className="login-btn">Login</button>
                    </div> 
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
