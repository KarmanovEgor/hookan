import React, { useState } from "react";
import Burger from "../Burger/Burger";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [activeBurger, setActiveBurger] = useState(false);
 



  function handleClickBurger() {
    setActiveBurger(!activeBurger);
  }

  

  return (
    <header
      className={`header page__header ${activeBurger ? "header_active" : ""}`}
    >
      <div className="header__container">
        <Link to={"/"} className="header__link-home"></Link>
        <>
          <Burger
            activeBurger={activeBurger}
            handleClickBurger={handleClickBurger}
          />
        </>
        <Link to={"/login"} className="header__link">АДМИНИСТРАТОР</Link> 
        {/* <div className="header__link">АДМИНИСТРАТОР</div> */}
      </div>
    </header>
  );
}