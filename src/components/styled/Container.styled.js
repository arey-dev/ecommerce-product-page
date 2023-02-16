import styled from "styled-components";

export const StyledContainer = styled.div`
  width: min(1100px, 100% - 2rem);
  padding-block: ${(props) => props.pBlock || 0}rem;
  margin-inline: auto;
`;

export const FlexedContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;

export const HeaderContainer = styled(FlexedContainer)`
  border-bottom: 1px solid hsla(219, 9%, 45%, 0.15);
`;
