import React, { useState } from "react";
import { StyledButton } from "../../styled/Button.styled";
import styled from "styled-components";
import { product } from "../../../app/products";

const LightboxSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ProductCard = styled(LightboxSection)`
  gap: unset;
  cursor: pointer;
`;

const ProductImages = styled(LightboxSection)`
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

const LightboxOverlay = styled(LightboxSection)`
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

const LightboxContent = styled(LightboxSection)`
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

const productImages = product.images;

export const Lightbox2 = () => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleThumbnailClick = (index) => {
    setCurrentImage(productImages[index]);
  };

  const handleLightbox = () => {
    if (!currentImage) {
      setCurrentImage(productImages[0]);
    }

    setShowLightbox(true);
  };

  const handlePreviousButtonClick = () => {
    setCurrentImage((prevIndex) =>
      prevIndex.id === 0
        ? productImages[productImages.length - 1]
        : productImages[prevIndex.id - 1]
    );
  };

  const handleNextButtonClick = () => {
    setCurrentImage((prevIndex) =>
      prevIndex.id === productImages.length - 1
        ? productImages[0]
        : productImages[prevIndex.id + 1]
    );
  };

  const handleCloseButtonClick = () => {
    setShowLightbox(false);
  };

  return (
    <>
      <LightboxSection>
        <LightboxImage
          src={currentImage ? currentImage.imageUrl : productImages[0].imageUrl}
          onClick={handleLightbox}
        />
        <ProductImages>
          {productImages.map((image) => (
            <ProductCard
              key={image.id}
              onClick={() => handleThumbnailClick(image.id)}
            >
              <Thumbnail
                src={image.thumbnail}
                alt={"Fall Limited Edition Sneakers"}
              />
            </ProductCard>
          ))}
        </ProductImages>
      </LightboxSection>
      {showLightbox && (
        <LightboxOverlay>
          <LightboxContent>
            <LightboxImageWrapper>
              <LightboxImage
                src={
                  currentImage
                    ? currentImage.imageUrl
                    : product.images[0].imageUrl
                }
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
              {productImages.map((image) => (
                <ProductCard
                  key={image.id}
                  onClick={() => handleThumbnailClick(image.id)}
                >
                  <Thumbnail
                    src={image.thumbnail}
                    alt="Fallout Limited Edition Sneakers"
                  />
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
