import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Header = (props) => {
  const onClick = () => {
    console.log("Clickable me");
  };

  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="black" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Manager"
};

// const headerStyle = {
//   color:'red',
//   backgroundColor:'black'
// }

export default Header;
