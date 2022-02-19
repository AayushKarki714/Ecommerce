import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCard = styled.div`
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;
const ImgContainer = styled.div`
  height: 20rem;
  margin-bottom: 2rem;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const DescContainer = styled.div``;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.7rem;
`;
const Description = styled.p`
  margin-bottom: 2rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.h4`
  font-size: 3rem;
`;

const LinkStyle = {
  padding: "1rem 3rem",
  backgroundColor: "black",
  color: "white",
  fontFamily: "inherit",
  textDecoration: "none",
  borderRadius: "4px",
};

const ProductItem = ({ products }) => {
  const modifyText = (text, size) =>
    text.length > size ? text.split("").splice(0, size).join("") + "..." : text;

  return (
    <>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ImgContainer>
            <Image src={product.image} />
          </ImgContainer>
          <DescContainer>
            <Title>{modifyText(product.title, 20)}</Title>
            <Description>{modifyText(product.description, 100)}</Description>
            <Flex>
              <Price>${product.price}</Price>
              <Link style={LinkStyle} to={`/product/${product.id}`}>
                See Details
              </Link>
            </Flex>
          </DescContainer>
        </ProductCard>
      ))}
    </>
  );
};

export default ProductItem;
