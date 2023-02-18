import styled from "styled-components";

const StyledImage = styled.img`
  cursor: pointer;
`;

export function Logo({ src, alt }) {
  return <StyledImage style={{ cursor: 'pointer' }} src={src} alt={alt} />;
}
