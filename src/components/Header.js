import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleOnn = () => {
    setToggleMenu(true);
  };
  const toggleOff = () => {
    setToggleMenu(false);
  };
  return (
    <Container>
      <a href="https://www.tesla.com/">
        <Logo />
      </a>
      <Menu>
        <a href="https://www.tesla.com/">Model X</a>
        <a href="https://www.tesla.com/">Model 3</a>
        <a href="https://www.tesla.com/">Model Y</a>
        <a href="https://www.tesla.com/">Solar Roof</a>
        <a href="https://www.tesla.com/">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="https://www.tesla.com/">Shop</a>
        <a href="https://www.tesla.com/">Tesla Account</a>
        <BurgerIcon onClick={toggleOnn}>
          <MenuIcon />
        </BurgerIcon>
      </RightMenu>
      <BurgerMenu
        style={{
          transform: `${toggleMenu ? "translateX(0px)" : "translateX(300px)"}`,
          transition: "all 700ms ease-in-out",
        }}
      >
        <Close>
          <CloseIcon onClick={toggleOff} />
        </Close>
        <li>
          <a href="https://www.tesla.com/">Model X</a>
        </li>
        <li>
          <a href="https://www.tesla.com/">Model 3</a>
        </li>
        <li>
          <a href="https://www.tesla.com/">Model Y</a>
        </li>
        <li>
          <a href="https://www.tesla.com/">Solar Roof</a>
        </li>
        <li>
          <a href="https://www.tesla.com/">Solar Panels</a>
        </li>
        <li>
          <a href="https://www.tesla.com/">Existing Inventory</a>
        </li>
        <li>
          <a href="https://www.tesla.com/">Used Inventory</a>
        </li>
        <li>
          <a href="https://www.tesla.com/">Trade-In</a>
        </li>
        <li>
          <a href="https://www.tesla.com/">Test Drive</a>
        </li>
        <li>
          <a href="https://www.tesla.com/">Powerwall</a>
        </li>
        <li>
          <a href="https://www.tesla.com/">Charging</a>
        </li>
        <li>
          <a href="https://www.tesla.com/">Find Us</a>
        </li>
      </BurgerMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 60px;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  background-image: url("../assets/model-s.jpg");
  background-size: cover;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    padding: 0 10px;
    font-weight: 600;
    text-transform: uppercase;
  }
  @media screen and (max-width: 967px) {
    display: none;
  }
`;
const BurgerIcon = styled.div`
  cursor: pointer;
  @media screen and (min-width:967px){
      display:none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    padding: 0 10px;
    font-weight: 600;
  }
`;

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background: white;
  display: none;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px 20px;
  transition: tranform 700ms ease-in-out;
  font-weight: 600;
  li {
    padding: 15px 10px;
    border-radius: 10px;
    margin-bottom: 5px;
    transition: background-color 800ms;
    width: 100%;
  }
  li:hover {
    background-color: #969697;
  }
  @media screen and (max-width: 967px) {
    display: flex;
  }
`;

const Close = styled.div`
  display: block;
  margin: 0 0 15px 15rem;
  cursor: pointer;
`;
