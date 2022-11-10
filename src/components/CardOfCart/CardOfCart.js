import React, { useContext, useState } from "react";
import "./CardOfCart.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsDash } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { GlobalContext } from "../../context/GlobalContext";
const CardOfCart = ({ item }) => {
  const [count, setCount] = useState(item?.qty);
  const {changeProductQty ,removeProductFromCart} = useContext(GlobalContext);

  return (
    <div className="CardOfCart">
      <span className="close-cart" onClick={()=>removeProductFromCart(item.id)}>
        <IoIosClose />
      </span>
      <img src={item?.image} alt={item.title} />

      <div className="CardOfCart-details">
        <div className="CardOfCart-top">
          <h3>{item.title}</h3>
        </div>

        <div className="CardOfCart-bottom">
          <div className="cart-quantity-div">
            <span>الكمية</span>
            <div className="product-quantity-div-inside-green">
              <button className="plus" onClick={() => {setCount(count + 1);changeProductQty(item,count+1)}}>
                <AiOutlinePlus />
              </button>
              <span>{count}</span>
              <button
                className="minus"
                // disabled={count < 2}
                onClick={() => {setCount(count - 1);changeProductQty(item,count-1)}}
              >
                <BsDash />
              </button>
            </div>
          </div>
          <div className="cart-bootom-price"><h3>{item.price * count} ريال</h3></div>
        </div>
      </div>
    </div>
  );
};

export default CardOfCart;
