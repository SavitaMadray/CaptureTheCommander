import React from "react";
import { Link } from "react-router-dom";
import "../Css/nav.css";

const Nav = ({ logOutUser, isUserLoggedIn }) => {
  if (isUserLoggedIn) {
    return (
      <nav>
        <Link className="link" to="/">
          Home
        </Link>
        <Link to="/users">Users</Link>
        <button onClick={logOutUser}>Log-out</button>
      </nav>
    );
  }
  return (
    <div className="Nav">
      <section className="navSection">
        <img
          className="navImg"
          src="https://cdn.pixabay.com/photo/2016/03/31/20/12/a-1295593_1280.png"
          alt="broken pic"
        />
        <Link to="/login">LogIn</Link> <Link to="/signup">SignUp</Link>{" "}
      </section>

      <img
        className="navImg"
        src="https://cdn.pixabay.com/photo/2016/03/31/20/12/a-1295593_1280.png"
        alt="broken pic"
      />
    </div>
  );
};

export default Nav;
