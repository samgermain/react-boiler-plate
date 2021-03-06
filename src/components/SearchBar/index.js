import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ className = "", onChange, ...props }) => (
  <div className={`position-relative flex-center-row ${className}`} {...props}>
    <FontAwesomeIcon
      style={{
        right: "0.5rem",
      }}
      className="position-absolute text-primary"
      icon={faSearch}
    />
    <input
      aria-label="search"
      className="form-control rounded-3 pr-5 w-100"
      onChange={onChange}
    />
  </div>
);
