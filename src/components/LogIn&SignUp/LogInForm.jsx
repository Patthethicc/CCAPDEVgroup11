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

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and pasword");
      return;
    }

    const details = {
      user_email: email,
      user_password: password,
    };

    try {
      const response = await fetch(`${API}/user/login`, {
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
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleLogIn}>
      <input
        className="input mt-3 p-2 text-md"
        type="text"
        placeholder="Email"
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

      <div
        className={`mt-2 w-full text-center transition-all duration-300 ease-in-out ${
          error ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
      </div>

      <Link to="/signup" className="links">
        Don&apos;t have an account yet? Click to create one!
      </Link>
    </form>
  );
}
