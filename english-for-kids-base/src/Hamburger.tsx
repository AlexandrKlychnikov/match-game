import React, { Component } from "react";
import "./components/hamburger.css";

export function handleClick() {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".navigation");
  hamburger?.classList.toggle("hamburger--active");
  nav?.classList.toggle("navigation--active");
}


class HamburgerMenuButton extends Component {
  render() {
    return (
      <button className="hamburger" onClick={handleClick}>
        <span className="hamburger__box">
          <span className="hamburger__inner"></span>
        </span>
      </button>
    );
  }
}

export default HamburgerMenuButton;

