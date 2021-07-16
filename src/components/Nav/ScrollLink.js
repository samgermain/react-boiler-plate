import React from "react";
import * as Scroll from "react-scroll";

const scrollOffset = -50;

const ScrollLink = ({ to, children, ...props }) => {
  return (
    <Scroll.Link
      to={to}
      activeClass={to === "root" ? "" : "active"}
      spy={true}
      smooth={true}
      offset={scrollOffset}
      duration={500}
    >
      {children}
    </Scroll.Link>
  );
};

export default ScrollLink;
