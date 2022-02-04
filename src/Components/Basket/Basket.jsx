import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from '../Button/Button.jsx';

import "./Basket.scss";

const Basket = () => {
  //   const currentUser = useSelector((state) => state.dataList);

  return (
    <div className="c-basket">
      <div className="c-basket__row">
        <div className="c-basket__img">
          <img src="/React-Shop-Basket/img/basket.png" alt="Basket" />
        </div>
        <div className="c-basket__cart">
          <Button color={"orange square"} title={"Testad"} />
        </div>
      </div>
    </div>
  );
};

export default Basket;
