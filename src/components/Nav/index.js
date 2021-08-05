import React, { useState, useEffect, useRef } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import ReactLogo from "svg/react-icon.svg";
import { useOnClickOutside } from "hooks";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";
import url from 'url';
import ScrollLink from './ScrollLink';

const stickyHeight = 60; //Height of the sticky navbar

const PageLinks = ({ links, className = "" }) => {
  
  const [urlPath, setUrlPath] = useState("");

  useEffect(() => {
    setUrlPath(url.parse(window.location.href).pathname);
  }, [window.location.href]);

  return (
    <>
      {Object.keys(links).map((key) => {
        
        const active = (
          urlPath == `/${key}` || 
          urlPath == "/" && key == "home"
        );

        return (
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
              ${active ? 'active' : ""}
              ${className}
            `}
          >
            {key}
          </Link>
        )
      })}
    </>
  );
};

const NavBrand = ({children}) => {
  
  const urlPath = url.parse(window.location.href).pathname;
    
  if (urlPath === "/home" || urlPath == "/"){
    return (
      <ScrollLink
        to="root"
        className="cursor-pointer mx-3 p-0 h-100"
      >
        {children}
      </ScrollLink>
    )
  }else{
    return (
      <Link to="/" className="navbar-brand p-0 h-100">
        {children}
      </Link>
    );
  };
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
    transition: ".3s"
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
          z-index-4 
          shadow-1 
          t-0
          ${sticky && !isHidden && "position-fixed"}
        `}
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
          className="navbar w-100 bg-light px-4"
        >
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
  <nav className="footer-nav nav nav-pills">
    <PageLinks links={links} />
  </nav>
);

export default ({ links, sticky = "" }) => (
  <Layout sticky={sticky}>
    <PageLinks links={links} />
  </Layout>
);

