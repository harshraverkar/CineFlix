import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [action, setAction] = useState("Login");
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length > 6;
    };

    const handleSignUp = async () => {
      if (action !== "Sign Up") return;
        try {
            const response = await fetch('http://localhost:3306/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            const data = await response.json();
            setMessage(data.message);

            if (data.success) {
            navigate('/login');            
          }

        } catch (error) {
            setMessage("Error communicating with the server.");
        }
    };

    const handleLogin = async () => {
      if (action !== "Login") return;
      try {
          const response = await fetch('http://localhost:3306/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
          });
  
          const data = await response.json();
          setMessage(data.message);
  
          if (data.success) {
            navigate('/');         
           } else {
              // Handle failed login, like setting an error message or something
          }
  
      } catch (error) {
          setMessage("Error communicating with the server.");
      }
  };
      return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Sign Up" && (
                    <div className="input">
                        <img src="" alt="" />
                        <input
                            type="text"
                            placeholder="Name"
                            value={values.name}
                            onChange={(e) => setValues({ ...values, name: e.target.value })}
                        />
                    </div>
                )}
                <div className="input">
                    <img src="" alt="" />
                    <input
                        type="email"
                        placeholder="Email Id"
                        value={values.email}
                        onChange={(e) => {
                            setValues({ ...values, email: e.target.value });
                            if (!validateEmail(e.target.value)) {
                                setErrors({ ...errors, email: 'Invalid email' });
                            } else {
                                setErrors({ ...errors, email: '' });
                            }
                        }}
                    />
                    <p className="error-message">{errors.email}</p>
                </div>
                <div className="input">
                    <img src="" alt="" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={(e) => {
                            setValues({ ...values, password: e.target.value });
                            if (!validatePassword(e.target.value)) {
                                setErrors({ ...errors, password: 'Password must be more than 6 characters' });
                            } else {
                                setErrors({ ...errors, password: '' });
                            }
                        }}
                    />
                    <p className="error-message">{errors.password}</p>
                </div>
            </div>
            {action !== "Sign Up" && (
                <div className="forgot-password">
                    Forgot Password? <span>Click Here!</span>
                </div>
            )} 

            <div className="submit-container">
            
            <div
    className={action === "Login" ? "submit gray" : "submit"}
    onClick={() => {
        setAction("Sign Up");
        if (action === "Sign Up") {
            handleSignUp();
        }
    }}
>
    Sign Up
</div>

<div
    className={action === "Sign Up" ? "submit gray" : "submit"}
    onClick={() => {
        setAction("Login");
        if (action === "Login") {
            handleLogin();
        }
    }}
>
    Login
</div>
{message && <p className="message-box">{message}</p>}
</div>

        </div>
    );
};

export default Login;
