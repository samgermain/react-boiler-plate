import React from "react";

export default ({ children, className = "", ...props }) => (
  <button {...props} className={`btn btn-primary rounded-4 ${className}`}>
    {children}
  </button>
);
