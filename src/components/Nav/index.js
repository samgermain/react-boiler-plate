import React, { useState, useEffect, useRef } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import ReactLogo from "svg/react-icon.svg";
import { useOnClickOutside } from "hooks";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";
//import ScrollLink from './ScrollLink';

const stickyHeight = 60; //Height of the sticky navbar

const PageLinks = ({ links, className = "" }) => {
  //TODO: const page = get the page page
  //Then add this to classname ${text === page && 'active'}`

  return (
    <>
      {Object.keys(links).map((key) => (
        <Link
          to={links[key]}
          key={key}
          className={`
            text-nowrap 
            nav-link 
            cursor-pointer
            h4
            mx-3
            p-0
            ${className}
          `}
        >
          {key}
        </Link>
      ))}
    </>
  );
};

const Layout = ({ sticky, children }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [open, setOpen] = useState(false);
  const node = useRef();

  const hideBar = () => {
    setOpen(false);
    const pos = window.pageYOffset;
    pos > 100 ? setIsHidden(false) : setIsHidden(true); //TODO: Dynamic position instead of 150
  };

  useEffect(() => {
    hideBar();
    window.addEventListener("scroll", hideBar, { passive: true });
    return () => {
      window.removeEventListener("scroll", hideBar);
    };
  }, []);

  const style = {
    ...(sticky && styles.stickyNav),
    ...(sticky && isHidden && styles.hide),
    ...styles.navBar,
  };

  const NavBrand = () => {
    const style = sticky
      ? { ...styles.navBrand, ...styles.navBrandSticky }
      : styles.navBrand;

    //TODO: on home page scroll to top instead of linking there
    // if (page === "home"){
    //   return (
    //     <ScrollLink
    //       style={style}
    //       to="root"
    //       className="cursor-pointer mx-3 p-0"
    //     >
    //       <NavBrandImage />
    //     </ScrollLink>
    //   )
    // }else{
    return (
      <Link style={style} to={"/"} className="navbar-brand h-100">
        <ReactLogo
          className="h-100"
          title="React Logo"
          alt="SVG of the react logo"
        />
      </Link>
    );
    // };
  };

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <div
        className={`shadow-1 ${sticky && !isHidden && "position-fixed"}`}
        style={style}
      >
        <BurgerMenu
          dropdown={false}
          className={`d-md-none navbar-nav nav-pills`}
          data-spy="affix"
          open={open}
        >
          {children}
        </BurgerMenu>
        <nav
          style={style}
          className="navbar navbar-expand-md navbar-light bg-light px-4"
        >
          <NavBrand />
          <nav
            className={`d-md-flex d-none nav nav-pills`}
            data-spy="affix"
            style={styles.nav}
          >
            {children}
          </nav>
          <Burger
            className={`d-md-none my-auto`}
            open={open}
            setOpen={setOpen}
          />
        </nav>
      </div>
    </div>
  );
};

export const FooterNav = ({ links }) => (
  <nav className="footer-nav">
    <PageLinks links={links} />
  </nav>
);

export default ({ links, sticky = "" }) => (
  <Layout sticky={sticky}>
    <PageLinks links={links} />
  </Layout>
);

const styles = {
  hide: {
    top: -stickyHeight,
  },
  nav: {
    marginLeft: "auto",
    marginRight: 20,
  },
  navBar: {
    display: "flex",
    width: "100%",
    padding: 0,
    height: 80,
    marginTop: "auto",
    marginBottom: "auto",
    zIndex: 4,
  },
  navBrand: {
    width: 40,
    marginTop: "2px",
    marginBottom: "2px",
  },
  navBrandSticky: {
    width: 40,
    marginTop: "0",
    marginBottom: "0",
  },
  navShadow: {
    boxShadow: "0 10px 15px -12px rgba(0,0,0,0.25)",
  },
  stickyNav: {
    height: stickyHeight,
    top: 0,
    zIndex: 4,
    transition: ".3s",
  },
};
