import React from "react";

export default ({ children, className = "", ...props }) => (
  <select {...props} className={`rounded-3 ${className}`}>
    {children}
  </select>
);
