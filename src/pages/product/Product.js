import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
// import CardLg from "../../components/BestProducts/CardLg";
import { products } from "../../utils/data";
import { AiFillHeart, AiOutlinePlus } from "react-icons/ai";
import { BsDash } from "react-icons/bs";

import "./Product.css";
import { GlobalContext } from "../../context/GlobalContext";
const Product = () => {
  const [count, setCount] = useState(1);
  // console.log(selet)
  const param = useParams();
  const oneProduct = products.find((a) => a.id === param.id);
    console.log(oneProduct);
  const {
    addProductToFavourite,
    removeProductFromFavourite,
    addProductToCart,
    removeProductFromCart,
    cart,
    favourite,
  } = useContext(GlobalContext);

//   let storedFavourite = favourite.find((o) => o.id === oneProduct.id);
//   const allStoredFavourite = storedFavourite ? true : false;
  let storedCart = cart.find((o) => o.id === oneProduct.id);
  const allStoredCart = storedCart ? true : false;
  // console.log("3232", allStoredFavourite);
  // const { removeProductFromFavourite,addProductToFavourite } = useContext(GlobalContext);

  return (
    <div className="product-section">
      <div className="product-section-container">
        <div className="section-container-top">
          <div className="product-img">
            <div className="one-image-big">
              <img
                src={oneProduct?.image}
                alt={oneProduct.title}
              />
            </div>
          </div>
          <div className="product-details">
            <div className="product-details-top">
              <div className="product-title-top">
                <h3 className="product-title">{oneProduct.title}</h3>
                <h5 className="product-vol">{oneProduct.vol}</h5>
              </div>
            </div>

            {/* <h3>الوصف</h3> */}
            <p>{oneProduct.description}</p>
            <h2 className="product-price">{oneProduct.price} جنيه</h2>

            <div className="product-quantity-div">
              <h3>الكمية</h3>
              <div className="product-quantity-div-inside">
                <div className="product-quantity-div-inside-green">
                  <button className="plus" onClick={() => setCount(count + 1)}>
                    <AiOutlinePlus />
                  </button>
                  <span>{count}</span>
                  <button
                    className="minus"
                    disabled={count < 2}
                    onClick={() => setCount(count - 1)}
                  >
                    <BsDash />
                  </button>
                </div>
                
                {allStoredCart ? (
                  <button
                    // onClick={() => addProductToCart(oneProduct)}
                    onClick={() => removeProductFromCart(oneProduct.id)}
                    className="product-btn remove"
                  >
                    حذف من السلة
                  </button>
                ) : (
                  <button
                    onClick={() => addProductToCart(oneProduct)}
                    className="product-btn"
                  >
                    إضافة للسلة
                  </button>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
