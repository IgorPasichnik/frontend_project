import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper } from "./main.styled";
import { fetchProducts, getProducts } from "../store/productsSlice";
import { Product } from "../components/Product";
import { Header } from "../components/Header";

export const Main = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <MainWrapper>
        {products.length > 0 &&
          products.map(({ title, description, price, imgUrl }) => {
            return (
              <Product
                title={title}
                description={description}
                price={price}
                imgUrl={imgUrl}
              />
            );
          })}
      </MainWrapper>
    </>
  );
};
