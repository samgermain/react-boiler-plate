import React from "react";

export default ({ children, className = "", ...props }) => (
  <select 
    className={`
      rounded-3 
      focus-2-visible
      ${className}
    `}
    {...props} 
  >
    {children}
  </select>
);
