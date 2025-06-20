import React, { useState } from 'react';

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
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <h2>Login</h2>
      {loginSuccess && (
        <div style={{ color: 'green', marginBottom: '10px' }}>
          Login successful
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '10px' }}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ margin: '10px' }}>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;