import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 700;
  color: hsl(0, 0%, 100%);

  &:hover {
    filter: brightness(110%);
  }
`;
