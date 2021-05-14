import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "this is a prop"
};

// const headerStyle = {
//   color:'red',
//   backgroundColor:'black'
// }

export default Header;
