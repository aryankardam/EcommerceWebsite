import React, { useContext } from "react";
import {
  MdOutlineMenu,
  MdClose,
  MdOutlineAddShoppingCart,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import axios from "../mainPages/utils/axiosInstance";

const Header = () => {
  const state = useContext(GlobalState);
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = state.UserAPI.isLogged;
  const [isAdmin, setIsAdmin] = state.UserAPI.isAdmin;
  const [cart] = state.UserAPI.cart;

  const logoutUser = async () => {
    try {
      await axios.get("/user/logout");
      localStorage.clear();
      setIsAdmin(false);
      setIsLogged(false);
      navigate("/"); // ✅ redirect to home
    } catch (err) {
      console.error("Logout failed:", err.response?.data?.msg || err.message);
    }
  };

  const adminRouter = () => (
    <>
      <li>
        <Link to="/create_product">Create Product</Link>
      </li>
      <li>
        <Link to="/category">Categories</Link>
      </li>
    </>
  );

  const loggedRouter = () => (
    <>
      <li>
        <Link to="/history">History</Link>
      </li>
      <li>
        <Link to="/" onClick={logoutUser}>
          Logout
        </Link>
      </li>
    </>
  );

  return (
    <header>
      <div className="menu">
        <MdOutlineMenu size={30} />
      </div>

      <div className="logo">
        <h1>
          <Link to="/">{isAdmin ? "Admin" : "30DC Shop"}</Link>
        </h1>
      </div>

      <ul>
        <li>
          <Link to="/">{isAdmin ? "Products" : "Shop"}</Link>
        </li>
        {isAdmin && adminRouter()}
        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            <Link to="/login">Login or Register</Link>
          </li>
        )}
        <li>
          <MdClose size={30} className="menu" />
        </li>
      </ul>

      {!isAdmin && (
        <div className="cart-icon">
          <span>{cart?.length || 0}</span>
          <Link to="/cart">
            <MdOutlineAddShoppingCart size={30} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
