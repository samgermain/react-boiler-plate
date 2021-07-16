import React from "react";

export default ({ open, setOpen, ...props }) => {
  const styles = {
    button: {
      top: "5%",
      right: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      width: "2rem",
      height: "2rem",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: 0,
      zIndex: 5,
    },

    span: {
      width: "2rem",
      height: "0.25rem",
      background: "#0D0C1D",
      borderRadius: 10,
      transition: "all 0.3s linear",
      position: "relative",
      transformOrigin: 1,
    },

    span1: {
      transform: `${open ? "rotate(45deg)" : "rotate(0)"}`,
    },

    span2: {
      opacity: `${open ? "0" : "1"}`,
      transform: `${open ? "translateX(20px)" : "translateX(0)"}`,
    },

    span3: {
      transform: `${open ? "rotate(-45deg)" : "rotate(0)"}`,
    },
  };

  return (
    <button
      style={styles.button}
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span style={{ ...styles.span, ...styles.span1 }} />
      <span style={{ ...styles.span, ...styles.span2 }} />
      <span style={{ ...styles.span, ...styles.span3 }} />
    </button>
  );
};
