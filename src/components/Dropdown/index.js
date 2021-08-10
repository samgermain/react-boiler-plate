import React from "react";
import "./style.scss";

//TODO: Style like this https://stackoverflow.com/questions/66961458/safari-select-dropdown-options-are-not-aligned-to-input-tag

export default ({ 
    children, 
    className = "", 
    placeholder="Please Choose...",
    ...props
}) => (
  <select 
    defaultValue=""
    className={`
      
      select-wrapper
      ${className}
    `}
    {...props} 
  >
    <option value="" disabled hidden>{placeholder}</option>
    {children}
  </select>
);
