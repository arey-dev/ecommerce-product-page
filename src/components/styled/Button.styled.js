import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 700;
  color: hsl(0, 0%, 100%);
  box-shadow: hsl(26, 100%, 55%) 0px 1.5625rem 1.25rem -1.25rem;

  &:hover {
    filter: brightness(110%);
  }
`;
