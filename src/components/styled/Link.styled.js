import styled from "styled-components";

export const StyledLink = styled.a`
  display: inline-block;
  color: hsl(219, 9%, 45%);
  padding-block: calc(2.5rem - 3px);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: hsl(220, 13%, 13%);
    box-shadow: inset 0px -3px 0 0 hsl(26, 100%, 55%);
  }
`;
