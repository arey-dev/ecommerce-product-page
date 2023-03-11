import styled from "styled-components";

export const StyledContainer = styled.div`
  width: min(${(props) => props.width || 1100}px, 100% - 4rem);
  padding-block: ${(props) => props.pBlock || 0}rem;
  margin-inline: auto;
`;

export const FlexedContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  transition: gap 0.3s ease-in-out;

  @media (max-width: 840px) {
    gap: 1rem;
  }
`;

export const HeaderContainer = styled(FlexedContainer)`
  border-bottom: 1px solid hsla(219, 9%, 45%, 0.15);

  @media (max-width: 768px) {
    border-bottom: none;
    padding-block: 1.5rem;
  }
`;

export const GridContainer = styled(StyledContainer)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 5rem;

  @media (max-width: 832px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding-block: 0rem 4rem;
  }

  @media (max-width: 480px) {
    width: min(${(props) => props.width || 1100}px, 100% - 0rem);
  }
`;
