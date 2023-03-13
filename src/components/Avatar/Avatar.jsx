import styled from "styled-components";
import avatar from './image-avatar.png'

const StyledAvatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid hsl(26, 100%, 55%);
  }

  @media (max-width: 390px) {
    width 2.5rem;
    height: 2.5rem;
  }
`;

export function Avatar() {
  return (
    <StyledAvatar>
      <img src={avatar} alt="user"/>
    </StyledAvatar>
  )
}