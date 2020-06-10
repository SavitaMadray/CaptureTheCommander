import React from "react";
import { Link } from "react-router-dom";
import "../Css/nav.css";

const Nav = ({ logOutUser, isUserLoggedIn }) => {
  return (
    <div className="Nav">
      <section className="navSection">
        <Link className="link" to="/">Home</Link> {" "} 
        <Link to="/users">Users</Link>
      </section>
    </div>
  );
};

export default Nav;
