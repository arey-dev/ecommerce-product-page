import styled from "styled-components";
import logo from "../../assets/logo.svg";

const StyledImage = styled.img`
  cursor: pointer;
`;

export function Logo() {
  return <StyledImage src={logo} alt="Sneakers" />;
}
