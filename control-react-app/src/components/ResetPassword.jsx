import React, { useState } from 'react';
import { redirect, useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setMessage("Passwords don't match");
      return;
    }

    console.log("Token from URL: " + token);
    console.log("Password: " + password);

    try {
      const response = await axios.post('https://control-app-backend-aqm1.onrender.com/api/auth/reset-password', {
        token,
        password: password,
      });
      setMessage("Password successfully reset!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setMessage("The reset link is expired.");
    }
  };

  return (
    <div className="reset-container">
      <h2>Reset Your Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
