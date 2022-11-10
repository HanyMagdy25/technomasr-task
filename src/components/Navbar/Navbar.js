import React, { useContext, useEffect, useState } from "react";
// Import React Router Dom
import { Link, NavLink } from "react-router-dom";
//  import CSS File
import "./Navbar.css";
// Import Data From Utils
import { navTitle } from "../../utils/data";
// Import Icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { BsInstagram, BsTwitter } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import { GlobalContext } from "../../context/GlobalContext";


const Navbar = () => {
  const [click, setClick] = useState(false);
  // to close icon in responsive layout
  const handleClick = () => setClick(!click);

  const [cartItems, setCartItems] = useState(null);
  const { cart } = useContext(GlobalContext);

  useEffect(() => {
    setCartItems(cart.length);
  }, [cart.length]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <div className="navbar-logo">
            <Link to="/">Logo</Link>
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <span>{click ? <AiOutlineClose /> : <AiOutlineMenu />}</span>
          </div>

          <ul className={click ? "nav-menu active " : "nav-menu"}>
            {navTitle.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.path}
                  className={"nav-links "}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex-center btn-login-div">
            <Link to="/cart" className="icon-topbar topbar-cart">
              {cartItems > 0 && <span>{cartItems}</span>}
              <BsFillCartPlusFill />
            </Link>
            <button className="btn btn-purple">تسجيل دخول</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
