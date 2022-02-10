import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from '../Button/Button.jsx';

import "./Basket.scss";

const Basket = () => {
  const products = useSelector((state) => state.shop.cart);
  let productsLength = products ? products.length : 0;

  return (
    <Link to="/React-Shop-Basket/Basket">
      <div className="c-basket">
        <div className="c-basket__row">
          <div className="c-basket__img">
            <img src="/React-Shop-Basket/img/basket.png" alt="Basket" />
          </div>
          <div className="c-basket__cart">
            <Button color={"orange square"} title={`${productsLength}`} />
          </div>
        </div>
      </div>
    </Link>

  );
};

export default Basket;
