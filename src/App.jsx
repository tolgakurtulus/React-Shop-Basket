import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import BasketPage from "./Pages/BasketPage/BasketPage.jsx";
import Header from "./Components/Header/Header.jsx";
import "./App.scss";

function App() {
  return (
    <div className="c-app">
      <Header />
      <Routes>
        <Route exact path="/React-Shop-Basket" element={<HomePage />} />
        <Route exact path="/React-Shop-Basket/Basket" element={<BasketPage />} />
      </Routes>
    </div>
  );
}

export default App;
