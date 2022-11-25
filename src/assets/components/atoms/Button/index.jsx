import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Button(props) {
  const className = [props.className];
  if (props.type === "link") {
    return (
      <Link
        to={props.href}
        className={className.join(" ")}
        style={props.style}
        onClick={props.onClick}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={props.onClick}
      type="submit"
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.string,
  href: propTypes.string,
  style: propTypes.object,
  onClick: propTypes.func,
  className: propTypes.string,
};

export default Button;
