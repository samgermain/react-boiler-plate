import React from "react";

import Nav from "components/Nav";
import { links } from "data";

const Header = () => {
  return (
    <header className="shadow-3">
      <Nav links={links.internal.nav} />
    </header>
  );
};

export default Header;
