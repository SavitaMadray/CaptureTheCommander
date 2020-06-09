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
        {/* <img
          className="navImg"
          src="https://cdn.pixabay.com/photo/2014/03/25/16/35/ninja-star-297476_1280.png"
          alt="broken pic"
        /> */}
        <button className="navButton">
          <Link to="/login" className="navLink">
            LogIn
          </Link>
        </button>{" "}
        <button className="navButton">
          <Link to="/signup" className="navLink">
            SignUp
          </Link>
        </button>
      </section>

      {/* <img
        className="navImg"
        src="https://cdn.pixabay.com/photo/2014/03/25/16/35/ninja-star-297476_1280.png"
        alt="broken pic"
      /> */}
    </div>
  );
};

export default Nav;
