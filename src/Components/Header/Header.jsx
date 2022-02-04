import React from "react";
import "./Header.scss";
import HeaderTitle from '../HeaderTitle/HeaderTitle.jsx';
import Basket from '../Basket/Basket.jsx';


const Header = () => {
  return (
    <header className="c-header">
      <HeaderTitle />
      <Basket />
    </header>
  );
};

export default React.memo(Header);
