import { NavInblock } from "../styled/Nav.styled";
import { StyledUlList } from "../styled/List.styled";
import { AvatarWrapper } from "../styled/Wrappers.styled";
import { IconWrapper } from "../styled/Wrappers.styled";
import { Cart } from "./Cart";
import { useState } from "react";
import avatar from "../assets/image-avatar.png";
import cart from "../assets/icon-cart.svg";
import styled from "styled-components";

const Notification = styled.div`
  font-size: 0.625rem;
  background-color: hsl(26, 100%, 55%);
  color: hsl(0, 0%, 100%);
  border-radius: 999px;
  padding-inline: 0.5rem;
  text-align: center;
  position: absolute;
  top: -0.5rem;
  left: 0.5rem;
`;

export function UserNav({ fill, unload }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCartClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <NavInblock>
        <StyledUlList gap="1">
          <li>
            <IconWrapper onClick={handleCartClick}>
              <img src={cart} alt="cart icon" />
              {fill ? <Notification>{fill}</Notification> : null}
            </IconWrapper>
            {isOpen && <Cart fill={fill} unload={unload} />}
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
