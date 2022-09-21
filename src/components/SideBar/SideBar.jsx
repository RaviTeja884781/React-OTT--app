import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_1">
        <Link>
          <button>
            Watch With Prime <br />
            Start your 30-day free trial
          </button>
        </Link>
        <Link>
          <button>Rent movie UHD &#8377;129</button>
        </Link>
        <Link>
          <button>more purchase options</button>
        </Link>
      </div>
      <div className="sidebar_2">
        <p>Share:</p>
        <div className="sidebar_flex">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-square-whatsapp"></i>
          <i class="fa-brands fa-square-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
