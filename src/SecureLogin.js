import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    // Other validation checks...

    if (Object.keys(newErrors).length === 0) {
      // Proceed with login
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email}</span>}

      {/* Other form inputs */}

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;