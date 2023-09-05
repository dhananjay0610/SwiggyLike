import { Link } from "react-router-dom";

export const Title = () => (
  <img
    className="title"
    src="https://logolook.net/wp-content/uploads/2023/04/Swiggy-Emblem.png"
    // src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*v5SYqjYEdQMPIwNduRrnCw.png"
    alt="swiggy"
  ></img>
);

const Header = () => {
  return (
    <div className="header-div">
      <Title />
      <div className="list-item">
        <ul>
          <Link to="/">
            <li className="livalues">Home</li>
          </Link>
          <Link to="/contact">
            <li className="livalues">Contact</li>
          </Link>
          <Link to="/about">
            <li className="livalues">About us</li>
          </Link>
          <Link to="/">
            <li className="livalues">Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
