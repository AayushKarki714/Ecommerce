import React, { useState } from "react";
import styled from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import data from "./SliderData";

const Container = styled.div`
  height: 80vh;
  position: relative;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 1s ease;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Actions = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 2;
  padding: 1rem 2rem;
  transform: translateY(-50%);
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  cursor: pointer;
  transition: all 0.3s ease;

  &:active {
    transform: scale(1.05);
  }
`;

const DotContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 2%;
  z-index: 3;
  gap: 1.5rem;
`;
const Dot = styled.div`
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &.active {
    background-color: #333;
  }
`;

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevHandler = () => {
    if (currentIndex === 0) {
      setCurrentIndex(data.length - 1);
    } else {
      setCurrentIndex(prevState => prevState - 1);
    }
  };
  const nextHandler = () => {
    if (currentIndex === data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(prevState => prevState + 1);
    }
  };
  return (
    <Container>
      {data.map((slider, index) => (
        <ImgContainer
          key={slider.id}
          style={{
            transform: `translateX(${(index - currentIndex) * 100}%)`,
          }}
        >
          <Image src={slider.src} />
        </ImgContainer>
      ))}
      <Actions>
        <Button onClick={prevHandler}>
          <ChevronLeftIcon
            style={{
              fontSize: "3rem",
              color: "white",
            }}
          />
        </Button>
        <Button onClick={nextHandler}>
          <ChevronRightIcon
            style={{
              fontSize: "3rem",
              color: "white",
            }}
          />
        </Button>
      </Actions>
      <DotContainer>
        {data.map((dot, index) => (
          <Dot
            className={currentIndex === index ? "active" : ""}
            key={dot.id}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotContainer>
    </Container>
  );
};

export default Slider;
