import { FiHeart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import "../App.css";

import { Link } from "react-router-dom";


function Nav({ carts, favorites }) {
  return (
    <div className="containerAllnav">
      <div className="logo-container">
      <Link to="/"> <h1>عقة-SHOP </h1></Link>
       
      </div>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <Link to="/">
          <IoHomeOutline color="white" className="nav-icons" />
        </Link>
        <Link to="/Fav">
          <FiHeart color="white" className="nav-icons" />({favorites.length})
        </Link>

        <Link to="/Form">
          <AiOutlineUser color="white" className="nav-icons" />
        </Link>

        <Link to="/Add">
          <PiShoppingCartSimpleDuotone color="white" className="nav-icons" />(
          {carts.length})
        </Link>
      </div>
    </div>
  );
}

export default Nav;
