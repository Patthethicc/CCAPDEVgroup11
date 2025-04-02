import "./loginpage.css";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import API from "../../url.js";
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10);

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [usertag, setTag] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);

    const details = {
      user_name: username,
      user_tag: usertag,
      user_email: email,
      user_password: password,
    };

    details.user_password = bcrypt.hashSync(details.user_password, salt);

    try {
      const response = await fetch(`${API}/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      console.log("Signup successful:", data);

      navigate("/login"); // change if needed
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        className="input"
        type="text"
        placeholder="Username"
        size="30px"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="@usertag"
        size="30px"
        value={usertag}
        onChange={(e) => setTag(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Email"
        size="30px"
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
      <button type="submit" className="button-logsign">
        Create Account
      </button>

      <div
        className={`mt-2 w-full text-center transition-all duration-300 ease-in-out ${
          error ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
      </div>

      <Link to="/login" className="links">
        Already have an account? Click here to log in
      </Link>
    </form>
  );
}
