import { Link, NavLink } from "react-router-dom";
import LogoImg from "../assets/logo/Logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-wrap">
          <Link to="/">
            <img src={LogoImg} alt="" />
          </Link>

          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/Company">Company</NavLink>
            <NavLink to="/Career">Career</NavLink>
            <NavLink to="/Blog">Blog</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
