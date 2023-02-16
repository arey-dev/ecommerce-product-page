import { StyledUlList } from "../styled/List.styled";
import { NavInblock } from "../styled/Nav.styled";
import { AvatarWrapper } from "../styled/Wrappers.styled";
import { IconWrapper } from "../styled/Wrappers.styled";
import avatar from "../assets/image-avatar.png";
import cart from "../assets/icon-cart.svg";

export function UserNav() {
  return (
    <>
      <NavInblock>
        <StyledUlList gap="1">
          <li>
            <IconWrapper>
              <img src={cart} alt="cart icon" />
            </IconWrapper>
          </li>
          <li>
            <AvatarWrapper width="3" height="3">
              <img src={avatar} alt="profile picture" />
            </AvatarWrapper>
          </li>
        </StyledUlList>
      </NavInblock>
    </>
  );
}
