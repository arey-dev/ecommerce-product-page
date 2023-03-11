import styled from "styled-components";

export const IconWrapper = styled.div`
  position: relative;
  width: ${(props) => props.width || 2}rem;
  cursor: pointer;

  @media (max-width: 390px) {
    width 1.5rem;
  }
`;

export const AvatarWrapper = styled(IconWrapper)`
  height: ${(props) => props.height || 2.75}rem;
  border-radius: 50%;

  &:hover {
    border: 2px solid hsl(26, 100%, 55%);
  }

  @media (max-width: 390px) {
    width 2.5rem;
    height: 2.5rem;
  }

`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 512px) {
    flex-direction: column;
  }
`;
