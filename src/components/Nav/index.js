import React, { useState, useEffect, useRef } from "react";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import url from "url";

import { camelCaseToSentenceCase } from "utils";
import { useOnClickOutside } from "hooks";
import ReactLogo from "svg/react-icon.svg";

import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";

const stickyHeight = 60; //Height of the sticky navbar

const replaceCaps = (s) => s.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

const PageLinks = ({ links, className = "" }) => {
  const [urlPath, setUrlPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setUrlPath(url.parse(window.location.href).pathname);
  }, [location.pathname]);

  return (
    <>
      {Object.keys(links).map((key) => {
        const active =
          urlPath == `/${replaceCaps(key)}` || (urlPath == "/" && key == "home");

        return (
          <Link
            to={links[key]}
            key={key}
            className={`
              text-nowrap 
              nav-link 
              cursor-pointer
              mx-3
              p-0
              ${active ? "active text-dark bolded" : ""}
              ${className}
            `}
          >
            {camelCaseToSentenceCase(key)}
          </Link>
        );
      })}
    </>
  );
};

const NavBrand = ({ children }) => {
  const urlPath = url.parse(window.location.href).pathname;

  return (
    <Link to="/" className="navbar-brand p-0 h-100">
      {children}
    </Link>
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
    //Hides and reveals the sticky navbar
    hideBar();
    window.addEventListener("scroll", hideBar, { passive: true });
    return () => {
      window.removeEventListener("scroll", hideBar);
    };
  }, []);

  const style = {
    top: sticky && isHidden && -stickyHeight,
    height: stickyHeight,
    transition: ".3s",
  };

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <div
        className={`
          d-flex 
          w-100 
          p-0 
          my-auto 
          shadow-1 
          t-0
          ${sticky && !isHidden && "position-fixed"}
        `}
        style={style}
      >
        <BurgerMenu
          dropdown={true}
          className={`d-md-none navbar-nav nav-pills`}
          data-spy="affix"
          open={open}
        >
          {children}
        </BurgerMenu>
        <nav style={style} className="navbar z-index-5 w-100 bg-light px-4">
          <NavBrand>
            <ReactLogo
              className="h-100"
              title="React Logo"
              alt="SVG of the react logo"
            />
          </NavBrand>
          <div
            className={`d-md-flex d-none nav nav-pills mr-3 ml-auto`}
            data-spy="affix"
          >
            {children}
          </div>
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
  <nav className="footer-nav nav nav-pills flex-center-row">
    <PageLinks links={links} />
  </nav>
);

export default ({ links, sticky = "" }) => (
  <Layout sticky={sticky}>
    <PageLinks links={links} />
  </Layout>
);
