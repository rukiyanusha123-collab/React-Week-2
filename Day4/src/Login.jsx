import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      navigate("/home");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>
        <p className="login-subtitle">Login to your account</p>

        <input
          className="login-input"
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="login-input"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-button" onClick={handleLogin}>
          LOGIN
        </button>

        <p className="login-register-text">
          Don't have an account?{" "}
          <Link className="login-link" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;