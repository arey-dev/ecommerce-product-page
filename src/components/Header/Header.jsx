import { useState, useEffect } from "react";
import { Nav } from "../Nav";
import { Logo } from "../Logo";
import { UserNav } from "../UserNav";
import { HeaderContainer } from "../styled/Container.styled";
import { Overlay } from "../styled/Overlay.styled";
import { Hamburger } from "../styled/Nav.styled";
import { useViewportWidth } from "../util-hooks/useViewportWidth";

export function Header({ fill, unload }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const viewportWidth = useViewportWidth();

  useEffect(() => {
    if (viewportWidth > 840) {
      // Change this to whatever threshold you want
      setIsOpen(false);
    }
  }, [viewportWidth]);

  return (
    <header>
      <HeaderContainer>
        <Hamburger onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Logo />
        <Nav isOpen={isOpen} onToggleMenu={toggleMenu} />
        <UserNav fill={fill} unload={unload} />
        <Overlay isOpen={isOpen} />
      </HeaderContainer>
    </header>
  );
}
