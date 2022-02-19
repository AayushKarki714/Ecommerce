import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  min-height: 90vh;
  position: relative;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 3rem;
`;

const TotalAmount = styled.h4`
  font-size: 3rem;
`;

const Empty = styled.h1`
  font-size: 3rem;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Cart = () => {
  const cart = useSelector(state => state.cart);

  let content;

  if (cart.items.length) {
    content = (
      <Container>
        {cart.items.map(cart => (
          <CartItem
            key={cart.id}
            id={cart.id}
            title={cart.title}
            price={cart.price}
            quantity={cart.quantity}
            image={cart.image}
            data={cart}
          />
        ))}
        <TotalContainer>
          <Title>Your Total Amount is:</Title>
          <TotalAmount>${cart.totalAmount}</TotalAmount>
        </TotalContainer>
      </Container>
    );
  } else {
    content = (
      <Container>
        <Empty>Cart is Empty</Empty>
      </Container>
    );
  }

  return <>{content}</>;
};

export default Cart;
