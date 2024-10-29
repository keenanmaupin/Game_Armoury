import React, { useState } from 'react';
import './LoginPage.css';
import auth from '../utils/auth';

const LoginPage: React.FC = () => {
    const [isRegisterMode, setIsRegisterMode] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [gamingEra, setgamingEra] = useState('');

    const toggleMode = () => {
        setIsRegisterMode((prevMode) => !prevMode);
    };

    const titleText = isRegisterMode ? "Register" : "Login";

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        localStorage.setItem('username', username)
        fetch('/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => {
            if (res.status === 401) {
                alert('Wrong credentials');
                return;
            }
            return res.json();
        })
        .then(data => {
            if (data) {
                console.log(data);
                auth.login(data.token);
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            alert('An unexpected error occurred. Please try again.');
        });
    };

    const handleRegister = (event: React.FormEvent) => {
        event.preventDefault();
        fetch('/auth/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                email,
                gamingEra
            })
        })
        .then(res => {
            if (!res.ok) {
                // Handle different response statuses
                if (res.status === 400) {
                    alert('Bad Request: Please check your input.');
                } else if (res.status === 409) {
                    alert('Conflict: Username or email already exists.');
                } else {
                    alert('An error occurred. Please try again.');
                }
                return;
            }
            return res.json();
        })
        .then(data => {
            if (data.token) {
                console.log(data);
                auth.login(data.token);
            } else {
                alert('Registration successful! Please log in.');
                // Reset fields after successful registration
                setUsername('');
                setPassword('');
                setEmail('');
            }
        })
        .catch(error => {
            console.error('Error during registration:', error);
            alert('An unexpected error occurred. Please try again.');
        });
    };

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
                <form onSubmit={isRegisterMode ? handleRegister : handleLogin}>
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password" 
                            placeholder="Password at least 4-16 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    {isRegisterMode && (
                        <div className="input-group">
                            <input 
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                    </div>
                    )}
                    {isRegisterMode && (
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Gaming Era: Console"
                            value={gamingEra}
                            onChange={(e) => setgamingEra(e.target.value)}
                            required
                        />
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
                        <button type="submit" className="login-btn">
                            {isRegisterMode ? 'Sign Up' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
