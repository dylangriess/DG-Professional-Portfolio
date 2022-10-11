import React from "react";
import Navigation from "./Navigation/Navigation";
import "./Navigation/Navigation.css";

const styles = {
  header: {
    background: "dark",
    minHeight: "10vh",
    opacity: "50%",
  },
};

function Header() {
  return (
    <div className="d-flex align-items-end" style={styles.header}>
      <Navigation />
    </div>
  );
}

export default Header;
