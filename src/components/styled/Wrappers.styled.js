import styled from "styled-components";

export const IconWrapper = styled.div`
  width: ${(props) => props.width || 2.75}rem;
  cursor: pointer;
`;

export const AvatarWrapper = styled(IconWrapper)`
  height: ${(props) => props.height || 2.75}rem;
  border-radius: 50%;

  &:hover {
    border: 2px solid hsl(26, 100%, 55%);
  }
`;
