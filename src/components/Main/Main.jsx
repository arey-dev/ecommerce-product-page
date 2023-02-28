import styled from "styled-components";
import { ProductSection } from "./ProductSection";
import { GridContainer } from "../styled/Container.styled";
import { Lightbox } from "./Lightbox";

export function Main() {
  return (
    <main>
      <GridContainer width="1000" pBlock="4">
        <Lightbox />
        <ProductSection />
      </GridContainer>
    </main>
  );
}
