import React, { useState } from "react";
import { StyledButton } from "../../styled/Button.styled";
import styled from "styled-components";
import product1 from "../assets/image-product-1.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";
import product2 from "../assets/image-product-2.jpg";
import p1thumbnail from "../assets/image-product-1-thumbnail.jpg";
import p3thumbnail from "../assets/image-product-3-thumbnail.jpg";
import p2thumbnail from "../assets/image-product-2-thumbnail.jpg";
import p4thumbnail from "../assets/image-product-4-thumbnail.jpg";

const LightboxSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ProductCard = styled(LightboxContainer)`
  gap: unset;
  cursor: pointer;
`;

const ProductImages = styled(LightboxContainer)`
  width: ${(props) => props.width || "100"}%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
`;

const Thumbnail = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 0.8rem;
`;

const CloseButton = styled(StyledButton)`
  position: absolute;
  top: -2.5rem;
  right: 0;
  cursor: pointer;
  z-index: 2;

  svg {
    transform: scale(1.5);
  }

  &:hover > svg > path {
    fill: hsl(26, 100%, 55%);
  }
`;

const LightboxOverlay = styled(LightboxContainer)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  gap: unset;
  z-index: 1;
`;

const LightboxContent = styled(LightboxContainer)`
  position: relative;
  width: 35%;
`;

const LightboxImageWrapper = styled.div`
  position: relative;
`;

const LightboxImage = styled.img`
  max-width: 100%;
  border-radius: 0.8rem;
`;

const LightboxButton = styled.div`
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: hsl(0, 0%, 100%);
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  ${(props) =>
    props.direction === "left" ? "left: -1.8rem;" : "right: -1.8rem;"}

  &:hover > svg > path {
    stroke: hsl(26, 100%, 55%);
  }
`;

export const Lightbox = () => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const products = [
    { id: 1, name: "Product 1", imageUrl: product1, thumbnail: p1thumbnail },
    { id: 2, name: "Product 2", imageUrl: product2, thumbnail: p2thumbnail },
    { id: 3, name: "Product 3", imageUrl: product3, thumbnail: p3thumbnail },
    { id: 4, name: "Product 4", imageUrl: product4, thumbnail: p4thumbnail },
  ];

  const handleThumbnailClick = (index) => {
    setCurrentImage(products[index]);
  };

  const handleLightbox = () => {
    if (!currentImage) {
      setCurrentImage(products[0]);
    }

    setShowLightbox(true);
  };

  const handlePreviousButtonClick = () => {
    setCurrentImage((prevIndex) =>
      prevIndex.id - 1 === 0
        ? products[products.length - 1]
        : products[prevIndex.id - 1 - 1]
    );
  };

  const handleNextButtonClick = () => {
    setCurrentImage((prevIndex) =>
      prevIndex.id === products.length
        ? products[0]
        : products[prevIndex.id - 1 + 1]
    );
  };

  const handleCloseButtonClick = () => {
    setShowLightbox(false);
  };

  return (
    <>
      <LightboxSection>
        <LightboxImage
          src={currentImage ? currentImage.imageUrl : product1}
          onClick={handleLightbox}
        />
        <ProductImages>
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              onClick={() => handleThumbnailClick(index)}
            >
              <Thumbnail src={product.thumbnail} alt={product.name} />
            </ProductCard>
          ))}
        </ProductImages>
      </LightboxSection>
      {showLightbox && (
        <LightboxOverlay>
          <LightboxContent>
            <LightboxImageWrapper>
              <LightboxImage
                src={currentImage ? currentImage.imageUrl : product1}
              />
              <LightboxButton
                direction="left"
                onClick={handlePreviousButtonClick}
              >
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              </LightboxButton>
              <LightboxButton direction="right" onClick={handleNextButtonClick}>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m2 1 8 8-8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              </LightboxButton>
            </LightboxImageWrapper>
            <ProductImages width="90">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <Thumbnail src={product.thumbnail} alt={product.name} />
                </ProductCard>
              ))}
            </ProductImages>
            <CloseButton onClick={handleCloseButtonClick}>
              <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                  fill-rule="evenodd"
                />
              </svg>
            </CloseButton>
          </LightboxContent>
        </LightboxOverlay>
      )}
    </>
  );
};
