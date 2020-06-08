import React from "react";

const SignUpForm = ({ username, password, handleChange, signupUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser();
  };

  return (
    <div>
      <h3>Sign-up</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="****"
          onChange={handleChange}
        />
        <input type="submit" value="SignUp" />
      </form>
    </div>
  );
};

export default SignUpForm;
