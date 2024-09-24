import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Use useNavigate

const Signup = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== verifyPassword) {
      setError("Passwords do not match");
      return;
    }

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      setError("User already exists with this email");
      return;
    }

    const newUser = { name, email, password };
    const updatedUsers = [...users, newUser];

    // Save new user data to JSONBin
    axios
      .put(
        `https://api.jsonbin.io/v3/b/${BIN_ID}`,
        { users: updatedUsers },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key": API_KEY,
          }
        }
      )
      .then(() => {
        setUsers(updatedUsers);
        setName("");
        setEmail("");
        setPassword("");
        setVerifyPassword("");
        setError("");
        navigate("/login"); // Redirect to login after registration using useNavigate
      })
      .catch((error) => console.error("Error saving data: ", error));
  };

  return (
    <div className="container">
      <h1>Register</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div className="mb-3">
          <label>Verify Password</label>
          <input
            type="password"
            className="form-control"
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Signup;
