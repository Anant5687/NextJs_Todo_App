import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = (args) => {
  return (
    <>
      <hr />
      <Navbar {...args} style={{ backgroundColor: "#D3D3D3" }}>
        <NavbarBrand href="/">
          <h3>Todo App</h3>
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default Header;
