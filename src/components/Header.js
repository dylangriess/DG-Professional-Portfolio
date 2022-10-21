import React from "react";
import Navigation from "./Navigation/Navigation";
import "./Navigation/Navigation.css";

const styles = {
  header: {
    background: "dark",
    minHeight: "10vh",
    width: "90%",
    marginRight: "50px",
  },
};

function Header() {
  return (
    <div
      className="d-flex align-items-end justify-content-end"
      style={styles.header}
    >
      <Navigation />
    </div>
  );
}

export default Header;
