import styled from "styled-components";
import { useState, useEffect } from "react";
import { product } from "../../../app/products";
import { StyledButton } from "../../styled/Button.styled";
import { useViewportWidth } from "../../util-hooks/useViewportWidth";

const LightboxSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 832px) {
    flex-direction: row;
  }
`;

const ProductCard = styled(LightboxSection)`
  width: 90%;
  gap: unset;
  position: relative;
  border-radius: 0.8rem;
  cursor: pointer;

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 1;
    border-radius: 0.7rem;
  }

  ${(props) =>
    props.selected &&
    `border: 2px solid hsl(26, 100%, 55%);
    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 1;
    border-radius: 0.7rem;}`}
`;

const ProductImages = styled(LightboxSection)`
  width: ${(props) => props.width || "100"}%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 832px) {
    flex-direction: column;
    width: 33%;
  }
`;

const Thumbnail = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 0.69rem;
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
  cursor: pointer;

  ${(props) => (props.disable ? "pointer-events: none" : null)};

  @media (max-width: 480px) {
    border-radius: 0;
  }
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
    props.direction === "left"
      ? props.isMobile
        ? "left: 0.5rem;"
        : "left: -1.8rem;"
      : props.isMobile
      ? "right: 0.5rem;"
      : "right: -1.8rem;"}

  &:hover > svg > path {
    stroke: hsl(26, 100%, 55%);
  }
`;

const productImages = product.images;

export const Lightbox2 = () => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(productImages[0]);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const viewportWidth = useViewportWidth();

  useEffect(() => {
    if (viewportWidth >= 812) {
      setShowLightbox(false);
    }
  }, [viewportWidth]);

  const handleThumbnailClick = (index) => {
    setSelectedThumbnail(index);
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
        <LightboxImageWrapper>
          <LightboxImage
            disable={viewportWidth <= 800}
            src={
              currentImage ? currentImage.imageUrl : productImages[0].imageUrl
            }
            onClick={handleLightbox}
          />
          {viewportWidth <= 640 && (
            <>
              <LightboxButton
                direction="left"
                isMobile={viewportWidth <= 640}
                onClick={handlePreviousButtonClick}
              >
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </LightboxButton>
              <LightboxButton
                direction="right"
                isMobile={viewportWidth <= 640}
                onClick={handleNextButtonClick}
              >
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m2 1 8 8-8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </LightboxButton>
            </>
          )}
        </LightboxImageWrapper>
        {viewportWidth > 640 && (
          <ProductImages>
            {productImages.map((image, index) => (
              <ProductCard
                key={image.id}
                onClick={() => handleThumbnailClick(image.id)}
                selected={selectedThumbnail === index}
              >
                <Thumbnail
                  src={image.thumbnail}
                  alt={"Fall Limited Edition Sneakers"}
                />
              </ProductCard>
            ))}
          </ProductImages>
        )}
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
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </LightboxButton>
              <LightboxButton direction="right" onClick={handleNextButtonClick}>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m2 1 8 8-8 8"
                    stroke="#1D2026"
                    strokeWidth="3"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </LightboxButton>
            </LightboxImageWrapper>
            <ProductImages width="90">
              {productImages.map((image, index) => (
                <ProductCard
                  key={image.id}
                  onClick={() => handleThumbnailClick(image.id)}
                  selected={selectedThumbnail === index}
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
                  fillRule="evenodd"
                />
              </svg>
            </CloseButton>
          </LightboxContent>
        </LightboxOverlay>
      )}
    </>
  );
};
