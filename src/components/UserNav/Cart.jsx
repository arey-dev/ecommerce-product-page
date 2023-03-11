import styled from "styled-components";
import { StyledButton } from "../styled/Button.styled";
import { OrderItem } from "./OrderItem";
import { product } from "../../app/products";
import { useViewportWidth } from "../util-hooks/useViewportWidth";

const CartContainer = styled.section`
  position: absolute;
  top: 3.5rem;
  left: -10rem;
  width: 21rem;
  background-color: hsl(0, 0%, 100%);
  border-radius: 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  z-index: 999;

  @media (max-width: 1280px) {
    left: -13.5rem;
  }

  @media (max-width: 420px) {
    width: 95%;
    top: 7rem;
    left: 0;
    right: 0;
    margin-inline: auto;
  }
`;

const CartHeader = styled.div`
  padding-block: 1rem;
  padding-inline: 1.5rem;
  border-bottom: 1px solid hsla(219, 9%, 45%, 0.15);
  font-weight: 700;
`;

const OrdersContainer = styled.div`
  padding-block: 1.5rem;
  padding-inline: 1.5rem;

  & > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const OrderList = styled.ul`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 0.5rem;
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
  ${(props) => (props.center ? "text-align: center" : null)}
`;

export function Cart({ fill, unload }) {
  const viewportWidth = useViewportWidth();

  return (
    <CartContainer>
      <CartHeader>
        <Text>Cart</Text>
      </CartHeader>
      <OrdersContainer>
        {fill ? (
          <>
            <OrderList>
              <OrderItem
                productImg={product.images[0].thumbnail}
                productName={product.name}
                qty={fill}
                price={product.price}
                unload={unload}
              />
            </OrderList>
            <CheckoutButton>Checkout</CheckoutButton>
          </>
        ) : (
          <Text
            pBlock={viewportWidth <= 480 ? 5 : 3}
            color="hsl(220, 14%, 75%)"
            center
          >
            Your cart is empty.
          </Text>
        )}
      </OrdersContainer>
    </CartContainer>
  );
}
