import { Link, useNavigate } from "react-router-dom";
import "./loginpage.css";

import { useState } from "react";
import API from "../../url.js";

export default function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    setError(null);

    const details = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Login successful:", data);

      navigate("/home");
    } catch (error) {
      alert(error.message); // Show error as an alert
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleLogIn}>
      <input
        className="input mt-3 p-2 text-md"
        type="text"
        placeholder="Username or Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        size="30px"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <a href="#" className="links">
        Forgot Password?
      </a>

      <button type="submit" className="button-logsign transition">
        Log In
      </button>

      <Link to="/signup" className="links">
        Don&apos;t have an account yet? Click to create one!
      </Link>
    </form>
  );
}
