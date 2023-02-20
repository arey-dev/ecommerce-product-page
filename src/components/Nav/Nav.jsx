import { StyledUlList } from "../styled/List.styled";
import { StyledLink } from "../styled/Link.styled";
import { StyledNav } from "../styled/Nav.styled";
import close from "../assets/icon-close.svg";
import { Button } from "../styled/Button.styled";

export function Nav({isOpen, onToggleMenu}) {
  return (
    <>
      <StyledNav>
        <StyledUlList column isOpen={isOpen}>
          <Button onClick={onToggleMenu} isOpen={isOpen}>
            <img src={close} alt="close" />
          </Button>
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
