import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Burger.css";

const Burger = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const { pathname } = useLocation();

  function handleClickBurger() {
    setActiveBurger(!activeBurger);
  }

  return (
    <nav className="header__navigation">
      <ul
        className={`header__lists ${
          activeBurger ? "header__lists_active " : ""
        }`}
      >
        <li className="header__links ">
          <Link
            to={"/"}
            className={`header__link ${
              pathname === "/" ? "header__link_active" : ""
            }`}
          >
            ДОМОЙ
          </Link>
        </li>
        <li className="header__links ">
          <Link
            to={"/tabac"}
            className={`header__link ${
              pathname === "/tabac" ? "header__link_active" : ""
            }`}
          >
            ТАБАК
          </Link>
        </li>
        <li className="header__links ">
          <Link
            to={"/bar"}
            className={`header__link ${
              pathname === "/bar" ? "header__link_active" : ""
            }`}
          >
            БАР
          </Link>
        </li>
        <li className="header__links ">
          <Link
            to={"/hookan"}
            className={`header__link ${
              pathname === "/hookan" ? "header__link_active" : ""
            }`}
          >
            КАЛЬЯН
          </Link>
        </li>
        <li className="header__links ">
          <Link
            to={"/contacts"}
            className={`header__link ${
              pathname === "/contacts" ? "header__link_active" : ""
            }`}
          >
            КОНТАКТЫ
          </Link>
        </li>
      </ul>
      <div
        className={`header__overlay ${
          activeBurger ? "header__overlay-active" : ""
        }`}
      ></div>
      <div
        onClick={handleClickBurger}
        className={`burger header__button${
          activeBurger ? " burger_active" : ""
        }`}
      >
        <div
          className={`burger-line ${activeBurger ? " burger-first-line" : ""}`}
        ></div>
        <div
          className={`burger-line ${activeBurger ? " burger-second-line" : ""}`}
        ></div>
        <div
          className={`burger-line ${activeBurger ? " burger-third-line" : ""}`}
        ></div>
      </div>
    </nav>
  );
};

export default Burger;
