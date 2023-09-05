import { Link } from "react-router-dom";

const Title = () => {
  return <img alt="Title"></img>;
};
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="list-item">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/">
            <li>About us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
