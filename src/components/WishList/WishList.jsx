import React from "react";
import "./WishList.css";
import { useState, useEffect } from "react";
import Poster from "../Poster/Poster";

const WishList = () => {
  let [wishList, setWishlist] = useState(null);

  useEffect(() => {
    let wish = localStorage.getItem("wishList");
    wish = JSON.parse(wish);
    setWishlist(wish);
  }, []);

  return (
    <div className="wishlist">
      <p>Favorites</p>
      <div className="wishlist_poster">
        {wishList && <Poster movies={wishList} />}
      </div>
    </div>
  );
};

export default WishList;
