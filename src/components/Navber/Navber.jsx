import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navber.css";
const Navber = () => {
  const [menu, setMenu] = useState("home");
  console.log(menu);
  return (
    <div className="navber">
      <img src={assets.logo} alt="" />
      <ul className="navber-menu ">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>

        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>

        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact-us
        </li>
      </ul>
      <div className="navber_right">
        <div className="navber-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button className="navber_button">Sign in</button>
      </div>
    </div>
  );
};
export default Navber;
