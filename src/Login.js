import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // useNavigate instead of useHistory

const Login = ({ setIsLoggedIn }) => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const BIN_ID = "66ec6de9acd3cb34a8879561";
  const API_KEY = "$2a$10$EYCYGDokQWM0JmlK0JsbquqQ682V8NccgLT.eI/670Y8EqFxSCdOe";

  // Fetch existing users from JSONBin
  useEffect(() => {
    axios
      .get(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: {
          "X-Master-Key": API_KEY,
        },
      })
      .then((response) => {
        const data = response.data.record;
        if (data.users) {
          setUsers(data.users);
        }
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      navigate("/transection");
      localStorage.setItem("loggedInUserEmail", user.email); 
      setIsLoggedIn(true); // Redirect to dashboard if login is successful
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
