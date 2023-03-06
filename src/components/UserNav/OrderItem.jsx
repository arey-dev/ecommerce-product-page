import styled from "styled-components";
import { DeleteIcon } from "./svgs";

const StyledLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 3.5rem;
  border-radius: 0.2em;
  object-fit: contain;
`;

const ProductDetailContainer = styled.div`
  font-size: 0.875rem;
`;

const TotalAmount = styled.span`
  color: hsl(220, 13%, 13%);
  font-weight: 700;
`;

const Text = styled.p`
  color: hsl(219, 9%, 45%);

  span {
    margin-right: 0.25rem;
  }
`;

export function OrderItem({ productImg, productName, price, qty, unload }) {
  return (
    <StyledLi>
      <ProductImage src={productImg} alt="sneakers" />
      <ProductDetailContainer>
        <Text>{productName}</Text>
        <Text>
          <span>
            ${price} x {qty}{" "}
          </span>
          <TotalAmount>${price * qty}</TotalAmount>
        </Text>
      </ProductDetailContainer>
      <DeleteIcon unload={unload} />
    </StyledLi>
  );
}
