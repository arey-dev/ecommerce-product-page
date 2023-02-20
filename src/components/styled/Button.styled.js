import styled from "styled-components";

export const Button = styled.button`
  display: ${({ isOpen }) => (isOpen ? "inline-block" : "none")};
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;
