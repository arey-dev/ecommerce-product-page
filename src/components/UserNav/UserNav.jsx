import { StyledUlList } from "../styled/List.styled";
import { NavInblock } from "../styled/Nav.styled";
import { AvatarWrapper } from "../styled/AvatarWrapper.styled";
import avatar from "../assets/image-avatar.png";
import cart from "../assets/icon-cart.svg";

export function UserNav() {
  return (
    <>
      <NavInblock>
        <StyledUlList>
          <li>
            <img src={cart} alt="cart" />
          </li>
          <li>
            <AvatarWrapper>
              <img src={avatar} alt="profile picture" />
            </AvatarWrapper>
          </li>
        </StyledUlList>
      </NavInblock>
    </>
  );
}
