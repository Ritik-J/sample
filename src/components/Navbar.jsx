import React from "react";

const Navbar = () => {
  const cartStyle = {
    display: "flex",
    backgroundColor: "darkBlue",
    justifyContent: "space-between",
    alignItems: "Center",
    padding: "5px 10px",
    color: "whiteSmoke",
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
      <h3>Redux Toolkit</h3>
      <h4 style={{ backgroundColor: "black", padding: "5px" }}>
        Cart item Total Price is:{}
      </h4>
      <button style={{ position: "relative", padding: "10px 20px" }}>
        Cart
        <span style={cartCounter}>0</span>
      </button>
    </div>
  );
};

export default Navbar;
