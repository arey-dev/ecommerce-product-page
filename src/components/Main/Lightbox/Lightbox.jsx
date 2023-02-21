import styled from "styled-components";

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -2rem;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    transform: scale(1.5);
  }

  &:hover > svg > path {
    fill: hsl(26, 100%, 55%);
  }
`;

const LightboxImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Lightbox = ({ imageUrl, onClose, isOpen }) => {
  return (
    <LightboxOverlay isOpen={isOpen}>
      <LightboxContent>
        <CloseButton onClick={onClose}>
          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fill-rule="evenodd"
            />
          </svg>
        </CloseButton>
        <LightboxImage src={imageUrl} alt="" />
      </LightboxContent>
    </LightboxOverlay>
  );
};
