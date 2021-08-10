import React from "react";
import {
  Dropdown,
  Head,
  PrimaryButton,
  ReactLogo,
  SearchBar,
} from "components";

const metadata = {
  description: "Home page",
  title: "Home",
  shareImage:
    "https://suddenlysask.com/static/cc701b5ed9329f7c62ace15b5dfec7e6/d00b9/cat.webp",
  path: "/",
};

export default () => (
  <div className="w-100 h-100 flex-center-row">
    <Head metadata={metadata} />
    <div className="w-100 flex-center-row ">
      <Dropdown>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Dropdown>
      <PrimaryButton>Button</PrimaryButton>
      <SearchBar />
    </div>
  </div>
);
