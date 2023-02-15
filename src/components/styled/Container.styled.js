import styled from "styled-components";

export const StyledContainer = styled.div`
  width: min(1100px, 100% - 2rem);
  padding-block: 2rem;
  padding-inlin: 1rem;
  margin-inline: auto;
`;

export const FlexedContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
