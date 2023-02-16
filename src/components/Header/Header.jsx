import { HeaderContainer } from "../styled/Container.styled";
import { Nav } from "../Nav";
import { Logo } from "../Logo";
import { UserNav } from "../UserNav";
import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header>
      <HeaderContainer>
        <Logo src={logo} alt="Sneakers Logo" />
        <Nav />
        <UserNav />
      </HeaderContainer>
    </header>
  );
}
