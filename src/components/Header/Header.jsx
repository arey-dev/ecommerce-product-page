import { HeaderContainer } from "../styled/Container.styled";
import { Nav } from "../Nav";
import { Logo } from "../Logo";
import { UserNav } from "../UserNav";
import { Hamburger } from "../styled/Nav.styled";
import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header>
      <HeaderContainer>
        <Hamburger>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Logo src={logo} alt="Sneakers Logo" />
        <Nav />
        <UserNav />
      </HeaderContainer>
    </header>
  );
}
