import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import CardOfCart from "../../components/CardOfCart/CardOfCart";

const Cart = () => {
  const [total, setTotal] = useState(null);
  const [cartLocal, setCartLocal] = useState([]);
  const { cart } = useContext(GlobalContext);
  console.log("cart", cart);
  console.log("cartLocal", cartLocal);
  useEffect(() => {
    setCartLocal(
      localStorage.getItem("cart-of-techno")
        ? JSON.parse(localStorage.getItem("cart-of-techno"))
        : []
    );
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="cart-section">
      <div className="cart-section-container">
        <h2>سلة التسوق</h2>
        {cart.length > 0 ? (
          <div className="cards-in-cart">
            <div className="right-cart">
              {cart.map((item, index) => (
                <CardOfCart key={index} item={item} />
              ))}
            </div>

            <div className="left-cart">
              <div className="left-cart-top">
                <h6>"لديك كوبون خصم؟"</h6>
                <h3>قم بتطبيقة!</h3>
                <div>
                  <input placeholder="ادخل رقم الكوبون هنا 1223" />
                  <button className="btn-green">تطبيق</button>
                </div>
              </div>
              <div className="left-cart-bottom">
                <div>
                  <h3>إجمالي الطلب</h3>
                  <h3>{total} ريال</h3>
                </div>
                <div>
                  <h3>الشحن</h3>
                  <h3>123 ريال</h3>
                </div>
                <div>
                  <h3>الضريبة</h3>
                  <h3>123 ريال</h3>
                </div>
                <div>
                  <h3>الخصم</h3>
                  <h3>123 ريال</h3>
                </div>
                <div className="last">
                  <Link to="/" className="btn-green flex-center">
                    تأكيد الشراء
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="favourite-empty">
            {/* <img src={emptyFav} alt="empty" /> */}
            <h3>السلة فارغة</h3>
            <Link to="/">قم بالتسوق لإضافة منتجات</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
