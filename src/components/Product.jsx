import { ProductsWrapper } from "./product.styled";

export const Product = ({ title, description, price, imgUrl }) => {
  return (
    <ProductsWrapper>
      <h2>{title}</h2>
      <img src={imgUrl} alt={description} />
      <p>{description}</p>
      <p>{price}</p>
    </ProductsWrapper>
  );
};
