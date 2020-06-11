import React from "react";
import { Link } from "react-router-dom";
import "../Css/nav.css";

const Nav = ({ logOutUser, isUserLoggedIn }) => {
  return (
    <div className="Nav">
      <Link className="link" to="/">
        Home
      </Link>{" "}
      {/* <Link to="/users">Users</Link> {" "} */}
      <Link className="link" to="/Matches">
        Recent Matches
      </Link>
    </div>
  );
};

export default Nav;
