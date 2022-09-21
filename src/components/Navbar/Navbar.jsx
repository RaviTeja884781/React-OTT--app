import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import topbar_logo_pic from "../../images/topbar/topbar_logo_pic.png";

const Navbar = () => {
  const [searchVal, setSearchVal] = useState("");
  return (
    <nav className="topbar">
      <div className="topbar_logo">
        <img src={topbar_logo_pic} alt="logo" />
      </div>
      <div className="topbar_search">
        <Link to={`/search${searchVal}`}>
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </Link>
        <input
          type="search"
          placeholder="search..."
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
      </div>
      <div className="topbar_links">
        <Link to="/">Home</Link>
        <Link to="/wish">WishList</Link>
        <Link to="/create">Upload Movie</Link>
      </div>
      <div className="topbar_form">
        <Link to="login">Login</Link>
        <Link to="signup">Sign Up</Link>
      </div>
    </nav>
  );
};
export default Navbar;
