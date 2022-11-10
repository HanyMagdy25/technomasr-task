import React from "react";
import { Link } from "react-router-dom";
// CSS File
import "./Card.css";
const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="cardlg">
    <div className="cardlggg">
      <img src={item?.image} alt={item.title} loading="lazy"/>
      <div className="cardld-details">
        <h5>{item?.title}</h5>
        <h6>جنيه {item?.price}</h6>
      </div>
    </div>
    </Link>
  );
};

export default Card;
