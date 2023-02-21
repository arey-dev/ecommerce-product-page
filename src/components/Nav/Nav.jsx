import { StyledUlList } from "../styled/List.styled";
import { StyledLink } from "../styled/Link.styled";
import { StyledNav } from "../styled/Nav.styled";
import styled from "styled-components";
import close from "../assets/icon-close.svg";

const CloseButton = styled.button`
  display: ${({ isOpen }) => (isOpen ? "inline-block" : "none")};
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export function Nav({isOpen, onToggleMenu}) {
  return (
    <>
      <StyledNav>
        <StyledUlList column isOpen={isOpen}>
          <CloseButton onClick={onToggleMenu} isOpen={isOpen}>
            <img src={close} alt="close" />
          </CloseButton>
          <li>
            <StyledLink>Collections</StyledLink>
          </li>
          <li>
            <StyledLink>Men</StyledLink>
          </li>
          <li>
            <StyledLink>Women</StyledLink>
          </li>
          <li>
            <StyledLink>About</StyledLink>
          </li>
          <li>
            <StyledLink>Contact</StyledLink>
          </li>
        </StyledUlList>
      </StyledNav>
    </>
  );
}
