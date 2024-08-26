import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../redux/slice/cartSlice";
import { Link } from "react-router-dom";
const Navbar = () => {
  const cartItem = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  const cartStyle = {
    display: "flex",
    backgroundColor: "darkBlue",
    justifyContent: "space-between",
    alignItems: "Center",
    padding: "5px 10px",
    color: "whiteSmoke",
    position: "sticky",
    top: "0",
    zIndex: "1",
  };

  const cartCounter = {
    position: "absolute",
    top: "0",
    right: "0",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "bold",
  };
  return (
    <div style={cartStyle}>
      <Link to={"/"} style={{ textDecoration: "none", color: "whitesmoke" }}>
        <h3>Redux Toolkit</h3>
      </Link>

      <h4 style={{ backgroundColor: "black", padding: "5px" }}>
        Cart item Total Price is: {totalPrice}
      </h4>
      <Link
        to={"/cart"}
        style={{ textDecoration: "none", color: "whitesmoke" }}
      >
        <button style={{ position: "relative", padding: "10px 20px" }}>
          Cart
          <span style={cartCounter}>{cartItem.length}</span>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
