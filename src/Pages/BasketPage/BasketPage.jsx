import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./BasketPage.scss";

const Button = (props) => {
  const dataList = useSelector((state) => state.dataList);

  return (
    <div className="c-basketpage">
      <div className="c-basketpage__row">
        <div className="c-basketpage__left">
          {dataList.map((item) => (
            <div className="c-basketpage__item">
              <div className="c-basketpage__img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="c-basketpage__container">
                <div className="c-basketpage__up-container">
                  <div className="c-basketpage__item-title">
                    <p>{item.title}</p>
                  </div>
                  <div className="c-basketpage__item-title-qty">
                    <span>Qty:</span>
                    <input type="number" min="1" />
                  </div>
                </div>
                <div className="c-basketpage__middle-container">
                  <p>{item.description}</p>
                </div>
                <div className="c-basketpage__down-container">
                  <div className="c-basketpage__price">
                    <p>$ {item.price}</p>
                  </div>
                  <div className="c-basketpage__delete-button">
                    <button>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
        <div className="c-basketpage__right">
          <div className="c-basketpage__total-card">
            <div className="c-basketpage__total-card-title">
              <p>Basket Summary</p>
            </div>
            <div className="c-basketpage__total-card-text">
              <p><b>Total:</b> </p>
              <p>$ 500 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
