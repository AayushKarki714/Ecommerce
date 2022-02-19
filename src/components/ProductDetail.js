import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  fetchSingleProduct,
  removeData,
} from "../reducer/features/single-productSlice";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import { addItemToCart } from "../reducer/features/cart-slice";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  gap: 4rem;
  width: 100%;
  height: 100%;
  padding: 4rem 2rem;
`;

const Left = styled.div`
  flex: 1;
`;
const ImgContainer = styled.div`
  height: 70vh;
  width: 80%;
  margin: 0 auto;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Loader = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const Price = styled.h4`
  font-size: 2.8rem;
  margin-bottom: 2rem;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  padding: 1rem 4rem;
  transition: all 0.2s ease;

  &:active {
    transform: scale(1.05);
  }
`;

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.singleProduct.product);
  const fetchStatus = useSelector(state => state.singleProduct.status);
  const error = useSelector(state => state.singleProduct.error);

  const addItemHandler = () => {
    dispatch(addItemToCart(product));
  };

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));

    return () => dispatch(removeData());
  }, [productId, dispatch]);

  let content;

  if (fetchStatus === "loading") {
    return (
      <Loader>
        <Spinner />
      </Loader>
    );
  }

  if (fetchStatus === "succeeded") {
    return (
      <Container>
        <Wrapper>
          <Left>
            <ImgContainer>
              <Image src={product.image} />
            </ImgContainer>
          </Left>
          <Right>
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
            <Price>${product.price}</Price>
            <Action>
              <Button onClick={addItemHandler}>Add To Cart</Button>
            </Action>
          </Right>
        </Wrapper>
      </Container>
    );
  }

  if (fetchStatus === "failed") {
    content = <div>{error}</div>;
  }

  return <>{content}</>;
};

export default ProductDetail;
