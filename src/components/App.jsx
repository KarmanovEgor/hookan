import "./page__content.css";
import "./App.css";
import Header from "./Header/Header";
import Promo from "./Promo/Promo";
import Products from "./Products/Products";
import Board from "./Board/Board";
import MainMenu from "./MainMenu/MainMenu";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import { useCallback, useEffect, useState } from "react";
import Popup from "./Popup/Popup";

function App() {

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const isOpen = isOpenPopup;
  const closePopup = useCallback(() => {
    setIsOpenPopup(false);
  }, [setIsOpenPopup]);

  const openPopup = () => {
    setIsOpenPopup(true);
  };

  useEffect(() => {
    if (!isOpen) return;

    function handleESC(e) {
      if (e.key === "Escape") {
        closePopup();
      }
    }

    document.addEventListener("keydown", handleESC);

    return () => document.removeEventListener("keydown", handleESC);
  }, [isOpen, closePopup]);
  return (
    <div className="page__content">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Promo openPopup={openPopup}/>
              <Products />
              <Board openPopup={openPopup}/>
              <MainMenu />
              <Popup isOpen={isOpenPopup} onClose={closePopup} />
            </>
          }
        />
        <Route 
        path="/login"
        element={
          <>
         <Header />
         <Login />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
