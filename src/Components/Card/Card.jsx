import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/index";
import Button from '../Button/Button.jsx';
import "./Card.scss";

const Card = () => {
  const products = useSelector((state) => state.shop.products);
  const dispatch = useDispatch()

  return (
    <div className="c-card">
      <div className="c-card__row">
        {products && products.map((item) => (
          <div className="c-card__item">
            <div className="c-card__img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="c-card__title">
              <p>{item.title}</p>
            </div>
            <div className="c-card__description">
              <p>{item.description}</p>
            </div>
            <div className="c-card__price">
              <p>$ {item.price}</p>
            </div>
            <div className="c-card__button-container">
              <button onClick={() => dispatch(addToCart(item.id))} className="c-card__button orange">+ Add To Chart</button>
              {/* <Button title={"+ Add To Cart"} color={"orange"}/> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
