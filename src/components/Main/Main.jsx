import styled from "styled-components";
import { ProductList } from "./Lightbox";
import { ProductSection } from "./ProductSection";
import { GridContainer } from "../styled/Container.styled";

const LightboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export function Main() {
  return (
    <main>
      <GridContainer width="1000" pBlock="4">
        <LightboxContainer>
          <ProductList />
        </LightboxContainer>
        <ProductSection />
      </GridContainer>
    </main>
  );
}
