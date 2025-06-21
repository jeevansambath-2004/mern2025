import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ Prevent page reload
    console.log('Submitted:', formData);

    // Show success message
    setLoginSuccess(true);

    // Clear form
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {loginSuccess && (
        <div style={{ color: 'green', marginBottom: '10px' }}>
          Login successful
        </div>
      )}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;