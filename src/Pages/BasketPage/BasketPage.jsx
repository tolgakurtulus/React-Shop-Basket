import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, adjustItemQty } from "../../redux/actions/index";
import "./BasketPage.scss";

const BasketPage = (props) => {
  const products = useSelector((state) => state.shop.cart);
  const [ total, setTotal] = useState();
  const dispatch = useDispatch()
  
  
  const onChangeHandler = (val, id) => {
    dispatch(adjustItemQty(id, val))
  };


  useEffect(() => {

    let totalVal = 0;
    products.forEach(function(element, i) {
      totalVal =+ totalVal + products[i].qty * products[i].price;
    });

    setTotal(totalVal)
  },[products]);

  return (
    <div className="c-basketpage">
      {products.length ? (
        <div className="c-basketpage__row">
          <div className="c-basketpage__left">
            {products.map((item) => (
              <div key={item.id} className="c-basketpage__item">
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
                      <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={item.qty}
                        onChange={(e) => onChangeHandler(e.target.value, item.id)}
                      />
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
                      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
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
                <p>
                  <b>Total: </b>
                </p>
                <p>$ {total} </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="c-basketpage__waste-title">
          <h2>Your Basket Is Waste</h2>
        </div>
      )}
    </div>
  );
};

export default BasketPage;
