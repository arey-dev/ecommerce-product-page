import { Lightbox } from "./Lightbox";
import React, { useState } from "react";
import styled from "styled-components";
import product2 from "./assets/image-product-2.jpg";
import product3 from "./assets/image-product-3.jpg";
import product4 from "./assets/image-product-4.jpg";
import product1 from "./assets/image-product-1.jpg";
import p1thumbnail from "./assets/image-product-1-thumbnail.jpg";
import p3thumbnail from "./assets/image-product-3-thumbnail.jpg";
import p2thumbnail from "./assets/image-product-2-thumbnail.jpg";
import p4thumbnail from "./assets/image-product-4-thumbnail.jpg";

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 0.8rem;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`;

const products = [
  { id: 1, name: "Product 1", imageUrl: product1, thumbnail: p1thumbnail },
  { id: 2, name: "Product 2", imageUrl: product2, thumbnail: p2thumbnail },
  { id: 3, name: "Product 3", imageUrl: product3, thumbnail: p3thumbnail },
  { id: 4, name: "Product 4", imageUrl: product4, thumbnail: p4thumbnail },
];

export const ProductList = () => {
  const [lightboxImageUrl, setLightboxImageUrl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleProductClick = (imageUrl) => {
    setLightboxImageUrl(imageUrl);
    setIsOpen(!isOpen);
  };

  const handleCloseLightbox = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ProductImage
        src={lightboxImageUrl ? lightboxImageUrl : product1}
        alt="product"
      />
      <ProductContainer>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            onClick={() => handleProductClick(product.imageUrl)}
          >
            <ProductImage src={product.thumbnail} alt={product.name} />
          </ProductCard>
        ))}
      </ProductContainer>

      <Lightbox
        imageUrl={lightboxImageUrl}
        onClose={handleCloseLightbox}
        isOpen={isOpen}
      />
    </>
  );
};
