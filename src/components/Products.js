import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchProducts } from "../reducer/features/products-slice";
import ProductItem from "./ProductItem";
import Spinner from "./Spinner";

const Container = styled.main`
  padding: 8rem 4rem 4rem;
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.h1`
  font-size: 4.5rem;
  font-weight: 500;
  margin-bottom: 3rem;
`;

const Select = styled.select`
  padding: 1rem 2rem;
  margin-bottom: 3rem;
`;

const Option = styled.option``;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  gap: 4rem;
`;

const Products = () => {
  const [selectFilter, setSelectFilter] = useState("All");
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  const fetchStatus = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);

  let productData = [...products];

  if (selectFilter !== "All") {
    productData = products.filter(product => product.category === selectFilter);
  }

  const uniqueCategory = [
    "All",
    ...new Set(products.map(product => product.category)),
  ];

  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch]);

  const selectChangeHandler = e => {
    setSelectFilter(e.target.value);
  };

  let content;

  if (fetchStatus === "loading") {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }
  if (fetchStatus === "succeeded") {
    return (
      <Container>
        <HeadingContainer>
          <Heading>Products</Heading>
          <Select value={selectFilter} onChange={selectChangeHandler}>
            {uniqueCategory.map(unique => (
              <Option key={unique}>{unique}</Option>
            ))}
          </Select>
        </HeadingContainer>
        <ProductContainer>
          <ProductItem products={productData} />
        </ProductContainer>
      </Container>
    );
  }
  if (fetchStatus === "failed") {
    content = <Container>{error}</Container>;
  }

  return <>{content}</>;
};

export default Products;
