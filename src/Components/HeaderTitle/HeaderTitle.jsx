import React from "react";
import { Link } from "react-router-dom";
import "./HeaderTitle.scss";

const HeaderTitle = () => {
  return (
    <header className="c-header-title">
      <Link to="/React-Shop-Basket">
        <h1>Shop And Detail</h1>
      </Link>

    </header>
  );
};

export default HeaderTitle;
