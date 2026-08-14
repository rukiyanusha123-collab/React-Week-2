import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import "./App.css"

function App() {
  return (
    <div className="app">
      <nav className="navbar">

        <h2 className="logo">MyApp</h2>

        <div className="nav-links">
          <Link className="nav-link" to="/home">
            Home
          </Link>

          <Link className="nav-link" to="/login">
            Login
          </Link>

          <Link className="nav-link" to="/register">
            Register
          </Link>
        </div>

      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;