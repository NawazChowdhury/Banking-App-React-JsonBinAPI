import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]); // For displaying only the user's transactions
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("deposit");
  const [message, setMessage] = useState(""); // For success message
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);

  const BIN_ID = "66f2f65ce41b4d34e4365507";
  const API_KEY = "$2a$10$EYCYGDokQWM0JmlK0JsbquqQ682V8NccgLT.eI/670Y8EqFxSCdOe";

  const navigate = useNavigate(); // Initialize useNavigate
  const email = localStorage.getItem("loggedInUserEmail"); 

  useEffect(() => {
    // Fetch existing transactions
    axios
      .get(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: {
          "X-Master-Key": API_KEY,
        },
      })
      .then((response) => {
        const data = response.data.record;
        if (data.transactions) {
          setTransactions(data.transactions);
          filterTransactions(data.transactions, email); // Filter transactions for the logged-in user
        }
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [email]); // Add email as a dependency

  const calculateTotal = (userTransactions) => {
    const totalAmount = userTransactions.reduce((acc, transaction) => {
      return transaction.type === "deposit" ? acc + transaction.amount : acc - transaction.amount;
    }, 0);
    setTotal(totalAmount);
  };

  const filterTransactions = (transactions, email) => {
    const userTransactions = transactions.filter((transaction) => transaction.email === email);
    setFilteredTransactions(userTransactions);
    calculateTotal(userTransactions); // Calculate total for the filtered transactions
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount)) {
      setError("Please enter a valid amount");
      return;
    }

    const newTransaction = {
      email, // Save email with the transaction
      amount: parseFloat(amount),
      type,
      date: new Date().toLocaleString(),
    };

    const updatedTransactions = [...transactions, newTransaction]; // Add new transaction to existing transactions

    axios
      .put(
        `https://api.jsonbin.io/v3/b/${BIN_ID}`,
        { transactions: updatedTransactions }, // Send updated transactions
        {
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key": API_KEY,
          },
        }
      )
      .then(() => {
        setTransactions(updatedTransactions); // Update state with the new transaction
        filterTransactions(updatedTransactions, email); // Re-filter after adding the new transaction
        setAmount("");
        setError("");
        setMessage(`Amount successfully ${type}ed!`); // Success message
      })
      .catch((error) => console.error("Error saving data: ", error));
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>

      <h2>Total Balance: ${total.toFixed(2)}</h2> {/* Display total balance with 2 decimal places */}

      {error && <div className="alert alert-danger">{error}</div>}
      {message && <div className="alert alert-success">{message}</div>} {/* Show success message */}

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label>Amount</label>
          <input
            type="text"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Transaction Type</label>
          <select
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Transaction
        </button>
      </form>

      <h2 className="mt-4">Your Transaction History</h2>
      <ul className="list-group mt-3">
        {filteredTransactions.map((transaction, index) => (
          <li key={index} className="list-group-item">
            {transaction.date}: {transaction.type} of ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transaction;
