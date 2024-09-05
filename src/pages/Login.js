import React,{ useState } from "react";
import {useNavigate} from "react-router-dom"
import "./Login.css"

const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        if (validateForm()){
            navigate("/dashboard")
        }
    }

    const validateForm = () => {
        const newErrors = {};
        if (!username) newErrors.username = 'Username is required';
        if (!password) newErrors.password = 'Password is required';
        if (username && password) {
            if (username !== "username" || password !== "password") {
              newErrors.credentials = 'Invalid credentials';
            }
          }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

    return (
      <div className="login-container">
        <h1 className="title">Mingle Loans</h1>
        <div className="login-box">
        <h2>Login</h2>
        <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
            />
             {errors.username && <span className="error">{errors.username}</span>}
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
            />
            {errors.password && <span className="error">{errors.password}</span>}
            <button className="login-button" onClick={handleLogin}>Login</button>
            {errors.credentials && <span className="error">{errors.credentials}</span>}
        </div>
      </div>
    )
}
export default Login;