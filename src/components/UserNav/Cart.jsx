import styled from "styled-components";
import { StyledButton } from "../styled/Button.styled";

const CartContainer = styled.section`
  position: absolute;
  top: 3.5rem;
  left: -9rem;
  width: 18.75rem;
  background-color: hsl(0, 0%, 100%);
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  z-index: 1;
`;

const CartHeader = styled.div`
  padding-block: 1rem;
  padding-inline: 1.5rem;
  border-bottom: 1px solid hsla(219, 9%, 45%, 0.15);
  font-weight: 700;
`;

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding-block: 1rem;
  padding-inline: 1.5rem;
`;

const OrderList = styled.ul`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 0.5rem;
`;

const OrderItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckoutButton = styled(StyledButton)`
  width: 100%;
  background-color: hsl(26, 100%, 55%);
  border-radius: 0.4rem;
  text-align: center;
  padding-block: 0.75rem;
`;

const Text = styled.p`
  font-weight: 700;
  color: ${(props) => props.color || "hsl(220, 13%, 13%)"};
  padding-block: ${(props) => props.pBlock || "0"}rem;
`;

export function Cart() {
  const order = 0;

  return (
    <CartContainer>
      <CartHeader>
        <Text>Cart</Text>
      </CartHeader>
      <OrdersContainer>
        {order ? (
          <OrderList>
            <OrderItem>Shoes</OrderItem>
          </OrderList>
        ) : (
          <Text pBlock="3" color="hsl(220, 14%, 75%)">
            Your cart is empty.
          </Text>
        )}
        <CheckoutButton>Checkout</CheckoutButton>
      </OrdersContainer>
    </CartContainer>
  );
}
