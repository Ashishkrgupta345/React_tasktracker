import React from "react";
import PropsTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <div>
      <header>
        <h1 style={{ color: "red", backgroundColor: "black" }}>{title}</h1>
        <Button />
      </header>
    </div>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
Header.propsTypes = {
  title: PropsTypes.string.isRequired,
};

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };
export default Header;
