import styled from "styled-components";

export const StyledUlList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap || 1.75}rem;
  overflow: hidden;

  @media (max-width: ${(props) => (props.column ? "768px" : "")}) {
    flex-direction: column;
    align-items: start;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${({ isOpen }) => (isOpen ? "15.5" : 0)}rem;
    padding-block: 3rem;
    background-color: hsl(0, 0%, 100%);
    padding-left: ${({ isOpen }) => (isOpen ? "3" : 0)}rem;
    gap: 1rem;
    z-index: 200;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  
`;
