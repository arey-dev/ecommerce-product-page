import styled from "styled-components";

export const StyledUlList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap || 1.75}rem;

  @media (max-width: ${(props) => (props.column ? "768px" : "")}) {
    flex-direction: column;
    align-items: start;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 75%;
    padding-block: 5rem;
    padding-left: 2rem;
    gap: 1rem;
  }
`;
