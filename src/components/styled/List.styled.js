import styled from "styled-components";

export const StyledUlList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${props => props.gap || 2}rem;
`;
