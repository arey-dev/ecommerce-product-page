import { FlexedContainer } from "../styled/Container.styled";
import { Nav } from "../Nav";
import { Logo } from "../Logo";
import { UserNav } from "../UserNav";
import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header>
      <FlexedContainer>
        <Logo src={logo} alt="Sneakers Logo" />
        <Nav />
        <UserNav />
      </FlexedContainer>
    </header>
  );
}
