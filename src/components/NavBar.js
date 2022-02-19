import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2.5rem;
  border-bottom: 1px solid whitesmoke;
`;

const Left = styled.div``;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-radius: 3px;
  background-color: whitesmoke;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  margin-left: 1rem;
  font-family: inherit;
  &:focus {
    outline: none;
  }
`;

const Center = styled.div``;

const Logo = {
  fontSize: "2.6rem",
  cursor: "pointer",
  textDecoration: "none",
  color: "black",
};
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
const Button = styled.button`
  font-size: 1.8rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CartStyles = {
  fontSize: "1.8rem",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  color: "black",
};

const NavBar = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  return (
    <>
      <Container>
        <Left>
          <SearchContainer>
            <Search
              style={{
                fontSize: "2rem",
                color: "gray",
              }}
            />
            <Input placeholder="Search" />
          </SearchContainer>
        </Left>
        <Center>
          <Link style={Logo} to="/">
            ECOMMERCE
          </Link>
        </Center>
        <Right>
          <Button>Login</Button>
          <Button>Register</Button>
          <Link style={CartStyles} to="/cart">
            <Badge badgeContent={totalQuantity} color="primary">
              <ShoppingCartOutlinedIcon
                style={{
                  fontSize: "2.6rem",
                }}
              />
            </Badge>
          </Link>
        </Right>
      </Container>
      <Outlet />
    </>
  );
};

export default NavBar;
