import { useState } from "react";
import { HeaderContainer } from "../styled/Container.styled";
import { Nav } from "../Nav";
import { Logo } from "../Logo";
import { UserNav } from "../UserNav";
import { Hamburger } from "../styled/Nav.styled";
import { Overlay } from "../styled/Overlay.styled";
import logo from "../assets/logo.svg";
import { useViewportWidth } from "../util-hooks/useViewportWidth";
import { useEffect } from "react";

export function Header({fill, unload}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const viewportWidth = useViewportWidth();

  useEffect(() => {
    if (viewportWidth > 768) { // Change this to whatever threshold you want
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
        <Logo src={logo} alt="Sneakers Logo" />
        <Nav isOpen={isOpen} onToggleMenu={toggleMenu} />
        <UserNav fill={fill} unload={unload}/>
        <Overlay isOpen={isOpen} />
      </HeaderContainer>
    </header>
  );
}
