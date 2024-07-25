import "./MainMenu.css";
import React, { useState } from "react";

export default function MainMenu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleToggleClick = (item) => {
    setSelectedItem((prevItem) => (prevItem === item ? null : item));
  };

  return (
    <section className="mainMenu">
        <div className="mainMenu__container">
      <div className="mainMenu__toggle">
        <h2 className="mainMenu__title">Меню</h2>
        <ul className="mainMenu__toggle">
        <li
          className={`toggle-item ${selectedItem === "Десерт" ? "active" : ""}`}
          onClick={() => handleToggleClick("Десерт")}
        >
          <div
            className={`checkbox-square ${
              selectedItem === "Десерт" ? "checkbox-square_active" : ""
            }`}
          ></div>
          <p className="mainMenu__text">Десерт</p>
        </li>
        <li
          className={`toggle-item ${selectedItem === "Кофе" ? "active" : ""}`}
          onClick={() => handleToggleClick("Кофе")}
        >
          <div
            className={`checkbox-square ${
              selectedItem === "Кофе" ? "checkbox-square_active" : ""
            }`}
          ></div>
          <p className="mainMenu__text">Кофе</p>
        </li>
        <li
          className={`toggle-item ${selectedItem === "Чай" ? "active" : ""}`}
          onClick={() => handleToggleClick("Чай")}
        >
          <div
            className={`checkbox-square ${
              selectedItem === "Чай" ? "checkbox-square_active" : ""
            }`}
          ></div>
          <p className="mainMenu__text">Чай</p>
        </li>
        <li
          className={`toggle-item ${selectedItem === "Бар" ? "active" : ""}`}
          onClick={() => handleToggleClick("Бар")}
        >
          <div
            className={`checkbox-square ${
              selectedItem === "Бар" ? "checkbox-square_active" : ""
            }`}
          ></div>
          <p className="mainMenu__text">Бар</p>
        </li>
        <li
          className={`toggle-item ${selectedItem === "Кальян" ? "active" : ""}`}
          onClick={() => handleToggleClick("Кальян")}
        >
          <div
            className={`checkbox-square ${
              selectedItem === "Кальян" ? "checkbox-square_active" : ""
            }`}
          ></div>
          <p className="mainMenu__text">Кальян</p>
        </li>
      </ul>
      </div>

      <div className="MainMenu__cards">
        <div style={{ display: selectedItem === "Десерт" ? "block" : "none" }}>
          Десерты
        </div>
        <div style={{ display: selectedItem === "Кофе" ? "block" : "none" }}>
          Кофе
        </div>
        <div style={{ display: selectedItem === "Чай" ? "block" : "none" }}>
          Чай
        </div>
        <div style={{ display: selectedItem === "Бар" ? "block" : "none" }}>
          Бар
        </div>
        <div style={{ display: selectedItem === "Кальян" ? "block" : "none" }}>
          Кальян
        </div>
      </div>
      </div>
    </section>
  );
}
