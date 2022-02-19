import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  addItemToCart,
  removeItemToCart,
} from "../reducer/features/cart-slice";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;
const ImgContainer = styled.div`
  width: 30rem;
  height: 30rem;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Desc = styled.div`
  flex: 1;
`;
const Title = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 3rem;
`;
const Price = styled.h4`
  font-size: 2rem;
`;
const Action = styled.div`
  display: flex;
  gap: 2rem;
`;
const Button = styled.button`
  padding: 2rem 3rem;
  border: none;
  background-color: teal;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;

  &:active {
    transform: scale(1.05);
  }
`;

const CartItem = ({ id, image, title, quantity, price, data }) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(addItemToCart({ ...data }));
  };

  const removeItemHandler = () => {
    dispatch(removeItemToCart(id));
  };

  return (
    <Container>
      <ImgContainer>
        <Image src={image} />
      </ImgContainer>
      <Desc>
        <Title>{title}</Title>
        <Price>
          {quantity}X{price}
        </Price>
      </Desc>
      <Action>
        <Button onClick={addItemHandler}>
          <Add
            style={{
              fontSize: "2rem",
            }}
          />
        </Button>
        <Button onClick={removeItemHandler}>
          <Remove
            style={{
              fontSize: "2rem",
            }}
          />
        </Button>
      </Action>
    </Container>
  );
};

export default CartItem;
