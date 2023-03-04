import styled from "styled-components";
import { StyledButton } from "../../styled/Button.styled";
import minus from "./icon-minus.svg";
import plus from "./icon-plus.svg";
import { FlexWrapper } from "../../styled/Wrappers.styled";

const CounterWrapper = styled(FlexWrapper)`
  width: 15rem;
  background-color: hsla(219, 9%, 45%, 0.15);
  color: hsl(220, 13%, 13%);
  border-radius: 0.4rem;
  padding: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

export function ItemCounter({ count, increment, decrement }) {
  
  return (
    <CounterWrapper>
      <StyledButton onClick={decrement}>
        <img src={minus} alt="minus" />
      </StyledButton>
      <span>{count}</span>
      <StyledButton onClick={increment}>
        <img src={plus} alt="plus" />
      </StyledButton>
    </CounterWrapper>
  );
}
