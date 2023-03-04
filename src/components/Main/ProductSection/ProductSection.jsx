import styled from "styled-components";
import { ItemCounter } from "./ItemCounter";
import { AddToCart } from "./AddToCart";
import { FlexWrapper } from "../../styled/Wrappers.styled";

const SectionContainer = styled.section`
  text-align: justified;
  font-weight: 700;
`;

const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Company = styled.span`
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: hsl(26, 100%, 55%);
`;

const Headline = styled.span`
  font-size: 2.5rem;
  line-height: 1;
  color: hsl(220, 13%, 13%);
`;

const ProductDescription = styled.p`
  color: hsl(219, 9%, 45%);
  margin-bottom: 2rem;
  font-weight: 400;
`;

const Pricing = styled.p`
  color: hsl(220, 13%, 13%);
  font-weight: 700;
  line-height: 1;
  margin-bottom: 2rem;
`;

const Price = styled.span`
  font-size: 1.75rem;
  margin-right: 1rem;
`;

const Discount = styled.span`
  font-size: 1rem;
  display: inline-block;
  padding: 0.25rem;
  background-color: hsl(25, 100%, 94%);
  color: hsl(26, 100%, 55%);
  border-radius: 0.4rem;
  vertical-align: top;
`;

const OriginalPrice = styled.span`
  display: block;
  padding-top: 0.75rem;
  text-decoration: line-through;
  color: hsl(220, 14%, 75%);
`;

export function ProductSection({count, increment, decrement}) {
  return (
    <SectionContainer>
      <Heading>
        <Company>sneaker company</Company>
        <Headline>Fall Limited Edition Sneakers</Headline>
      </Heading>
      <ProductDescription>
        These low-profile are your perfect casual wear companion. Featuring a
        durable outer sole, they'll withstand everything the weather can offer.
      </ProductDescription>
      <Pricing>
        <Price>$125.00</Price>
        <Discount>50%</Discount>
        <OriginalPrice>$250.00</OriginalPrice>
      </Pricing>
      <FlexWrapper>
        <ItemCounter count={count} increment={increment} decrement={decrement}/>
        <AddToCart />
      </FlexWrapper>
    </SectionContainer>
  );
}
