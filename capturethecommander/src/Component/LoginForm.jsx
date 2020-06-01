import React from "react";

const LoginForm = ({ username, password, handleChange, loginUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div>
      <h3>Log In</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="****"
          onChange={handleChange}
        />
        <input type="submit" value="log-in" />
      </form>
    </div>
  );
};

export default LoginForm;
