// src/components/ForgetPasswordPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './ForgetPasswordPage.css'; // Import the CSS file

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/reset-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="forget-password-container">
      <h1>Forget Password</h1>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="button" onClick={handleResetPassword}>
          Reset Password
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgetPasswordPage;
