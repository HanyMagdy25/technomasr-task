import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
// import Spinner For Loading
import Spinner from "../../constants/Spinner";
// Import Dummy Data
import { products } from "../../utils/data";
// Import CSS
import "./Home.css";

const Home = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setCategory(products);
  }, []);

  const filterResult = (cartItem) => {
    const result = products.filter((curData) => {
      return curData.cats.includes(cartItem);
    });
    setCategory(result);
  };

  return (
    <div className="products-parent">
      <div className="products-parent-container container">
        {/* ========== Right Side =========== */}
        <div className="products-div">
          {!products.length > 0 ? (
            <div className="choose-cat">
              <div className="spinner">
                <Spinner />
              </div>
            </div>
          ) : (
            category.map((card, index) => (
              <Card
                key={index}
                item={card}
                inArt={true}
                type="three"
                path="article-inside"
              />
            ))
          )}
        </div>
        {/* ====== Left Side ======= */}
        <div className="categories">
          <div className="categories-container">
            <h3 className="categories-head-title">التصنيفات</h3>
            <hr />
            <label className="form-control">
              <input
                type="radio"
                name="checkbox"
                // checked={category.length === products.length}
                onChange={() => setCategory(products)}
              />
              كل المنتجات
            </label>
            <label className="form-control">
              <input
                type="radio"
                name="checkbox"
                onClick={() => filterResult("شاشات")}
              />
              شاشات
            </label>
            <label className="form-control">
              <input
                type="radio"
                name="checkbox"
                onClick={() => filterResult("موبايلات")}
              />
              موبايلات
            </label>
            <label className="form-control">
              <input
                type="radio"
                name="checkbox"
                onClick={() => filterResult("ساعات")}
              />
              ساعات
            </label>
            <label className="form-control">
              <input
                type="radio"
                name="checkbox"
                onClick={() => filterResult("السوبر ماركت")}
              />
              السوبر ماركت
            </label>

            <label className="form-control">
              <input
                type="radio"
                name="checkbox"
                onClick={() => filterResult("الموضة")}
              />
              الموضة
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
