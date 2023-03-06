import styled from "styled-components";
import { ProductSection } from "./ProductSection";
import { GridContainer } from "../styled/Container.styled";
// import { Lightbox } from "./Lightbox";
import { Lightbox2 } from "./Lightbox";

export function Main({ count, increment, decrement, addToCart }) {
  return (
    <main>
      <GridContainer width="1000" pBlock="4">
        <Lightbox2 />
        <ProductSection
          count={count}
          increment={increment}
          decrement={decrement}
          addToCart={addToCart}
        />
      </GridContainer>
    </main>
  );
}
