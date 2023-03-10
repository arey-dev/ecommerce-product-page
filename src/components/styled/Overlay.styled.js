import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  height: 100%
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.1); 
  z-index: 100;
`;
