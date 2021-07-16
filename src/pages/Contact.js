import React from "react";
import { Head, EmailForm } from "components";

const metadata = {
  description: "Web page description",
  title: "Home",
  shareImage:
    "https://suddenlysask.com/static/cc701b5ed9329f7c62ace15b5dfec7e6/d00b9/cat.webp",
  path: "/",
};

export default () => (
  <div className="w-100 h-100 flex-center-row">
    <Head metadata={metadata} />
    <div className="flex-center-col col-md-7 col-11">
      <h1 className="mb-3">Send an Email</h1>
      <EmailForm className="w-100" />
    </div>
  </div>
);
