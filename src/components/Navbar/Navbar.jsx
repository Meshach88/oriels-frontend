import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets";
import { FaSearch } from "react-icons/fa";
import { FaBasketShopping, FaRegCircleUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import StoreContext from "../../context/StoreContext";

const Navbar = ({ setShowLogin, token, setToken }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  // console.log(token)

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.Ologo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#"
          onClick={() => setMenu("about-us")}
          className={menu === "about-us" ? "active" : ""}
        >
          About us
        </a>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        {/* <img src="" alt="search icon" /> */}
        <FaSearch style={{ color: "gray", fontSize: "24px", cursor:"pointer" }} />
        <div className="navbar-search-icon">
          {/* <img src="" alt="basket-icon" /> */}
          <Link to="/cart">
            <FaBasketShopping style={{ color: "gray", fontSize: "24px" }} />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            {/* <img src="" alt="profile_icon" /> */}
            <FaRegCircleUser style={{ fontSize: "30px", color: "gray", cursor:"pointer" }} />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/myorders')}>
                {/* <img src="" alt="bag icon" />
                 */}
                 <IoBagOutline />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logOut}>
                {/* <img src="" alt="logout icon" /> */}
                <CgLogOut />

                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
