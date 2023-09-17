import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../utils/store";
import React from "react";
export const Title = (): JSX.Element => (
  <img
    className="title"
    src="https://logolook.net/wp-content/uploads/2023/04/Swiggy-Emblem.png"
    // src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*v5SYqjYEdQMPIwNduRrnCw.png"
    alt="swiggy"
  ></img>
);

const Header = (): JSX.Element => {
  const cartItems = useSelector((store: RootState) => store.cart.items);

  return (
    <div className="header-div">
      <Title />
      <div className="list-item">
        <ul className="headerList">
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/"
          >
            <li className="livalues">Home</li>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/contact"
          >
            <li className="livalues">Contact</li>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/about"
          >
            <li className="livalues">About us</li>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/cart"
          >
            <li className="livalues">Cart {cartItems?.length} </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
