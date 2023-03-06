import { StyledUlList } from "../styled/List.styled";
import { NavInblock } from "../styled/Nav.styled";
import { AvatarWrapper } from "../styled/Wrappers.styled";
import { IconWrapper } from "../styled/Wrappers.styled";
import { Cart } from "./Cart";
import avatar from "../assets/image-avatar.png";
import cart from "../assets/icon-cart.svg";
import { useState } from "react";

export function UserNav({ fill, unload }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleCartClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <NavInblock>
        <StyledUlList gap="1">
          <li>
            <IconWrapper>
              <img src={cart} alt="cart icon" />
              {isOpen && <Cart fill={fill} unload={unload} />}
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
