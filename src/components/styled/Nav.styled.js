import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
`;

export const NavInblock = styled.nav`
  display: inline-block;
  position: relative;
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 0.25rem;

  span {
    display: block;
    height: 3px;
    width: 20px;
    background-color: hsl(219, 9%, 45%);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
