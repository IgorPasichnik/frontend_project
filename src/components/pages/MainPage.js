import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import products from "../../products.json";
import { addProducts, deleteSingleProduct } from "../../store/productsSlice";
import { getProducts } from "../../store/productsSelectors";

export const MainPage = () => {
  const dispatch = useDispatch();
  const storeProduts = useSelector(getProducts);

  useEffect(() => {
    dispatch(addProducts(products));
  }, [dispatch]);

  const deleteSingleProductHandler = (id) => () => {
    dispatch(deleteSingleProduct({ id }));
  };

  return (
    <div>
      {storeProduts.length > 0 &&
        storeProduts.map((product) => {
          return (
            <div
              key={`${product.id} + ${product.t}`}
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
              }}
            >
              <h2>{product.title}</h2>
              <div>{product.price}</div>
              <button onClick={deleteSingleProductHandler(product.id)}>
                Удалить товар
              </button>
            </div>
          );
        })}
    </div>
  );
};
