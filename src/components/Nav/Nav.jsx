import { StyledUlList } from "../styled/List.styled";
import { StyledLink } from "../styled/Link.styled";
import { StyledNav } from "../styled/Nav.styled";

export function Nav() {
  return (
    <>
      <StyledNav>
        <StyledUlList column>
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
