import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-page">
      <div className="register-card">
        <h1 className="register-title">Create Account ✨</h1>

        <p className="register-subtitle">
          Register to get started
        </p>

        <input
          className="register-input"
          type="text"
          placeholder="User Name"
        />

        <input
          className="register-input"
          type="email"
          placeholder="Email"
        />

        <input
          className="register-input"
          type="password"
          placeholder="Password"
        />

        <button className="register-button">
          REGISTER
        </button>

        <p className="register-login-text">
          Already have an account?{" "}
          <Link className="register-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;