import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Css/nav.css";

function Nav() {
  return (
    <div className="Nav">
      <img
        className="navImg"
        src="https://cdn.pixabay.com/photo/2016/03/31/20/12/a-1295593_1280.png"
      ></img>
      <section className="navSection">
        <Link className="link" to="/">
          Home
        </Link>{" "}
        <img
          className="navImg"
          src="https://cdn.pixabay.com/photo/2016/03/31/20/12/a-1295593_1280.png"
        ></img>
      </section>
    </div>
  );
}

export default Nav;
