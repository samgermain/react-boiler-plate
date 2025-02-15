import React from "react";

export default ({ webp = "", other, alt, width = "", height = "", className = "", ...props }) => (
  <picture className={`d-inline-block ${className}`} {...props}>
    <source srcSet={webp} style={{ maxWidth: "100%" }} />
    <img 
      src={other}
      alt={alt}
      style={{ maxWidth: "100%" }}
      width={width}
      height={height}
    />
  </picture>
);
