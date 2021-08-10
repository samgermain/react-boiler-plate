import React from "react";
import { Head, ReactLogo } from "components";

const metadata = {
  description: "Home page",
  title: "Home",
  shareImage:
    "https://suddenlysask.com/static/cc701b5ed9329f7c62ace15b5dfec7e6/d00b9/cat.webp",
  path: "/",
};

export default () => (
  <div 
    className="w-100 flex-center-col"
    style={{
      minHeight: "70vh"
    }}
  >
    <Head metadata={metadata} />
    
      <ReactLogo className="mx-auto " />
    
  </div>
);
