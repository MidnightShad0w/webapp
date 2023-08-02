import React from "react";
import "./Button.css";

function Button({active, type, title, disable, onClick }) {
  return (
    <button
      className={`btn ${
        (type === "add" && "add") ||
        (type === "remove" && "remove") ||
        (type === "foodType" && "foodType") ||
        (type === "checkout" && "checkout")
      }
      ${(active === "active" && "foodType-active")}`}
      disabled={disable}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
