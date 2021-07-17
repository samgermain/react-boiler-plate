import React from "react";

import Burger from "./Burger";

const BurgerMenu = ({
  open,
  dropdown,
  navHeight = 60,
  className = "",
  children,
}) => {
  const axis = dropdown ? "Y(-" : "X(";

  let style = {
    height: !dropdown && "100vh",
    padding: "2rem",
    marginTop: dropdown && navHeight,
    transform: open ? `translate${axis}0)` : `translate${axis}100%)`,
    top: 0,
    right: 0,
    transition: "height 0.3s ease-in-out, transform 0.3s ease-in-out",
    zIndex: 4,
  };

  return (
    <nav
      id="burgerMenu"
      style={style}
      aria-hidden={!open}
      hidden={!open}
      className={`shadow-2 text-left flex-center-md-row position-absolute ${className} `}
    >
      {children}
    </nav>
  );
};

export default BurgerMenu;
