import React from "react";

const BurgerMenu = ({
  open,
  dropdown = true,
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
    transition: "all 0.3s linear",
  };

  return (
    <nav
      id="burgerMenu"
      style={style}
      // hidden={!open}
      className={`
        shadow-2 
        text-left 
        flex-center-md-row 
        position-absolute 
        z-index-4
        bg-light
        ${className}
      `}
    >
      {children}
    </nav>
  );
};

export default BurgerMenu;
