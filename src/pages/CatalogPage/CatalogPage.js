import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const CatalogPage = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    fetch("https://658003026ae0629a3f5420c6.mockapi.io/api/test1/goods")
      .then((res) => res.json())
      .then((data) => {
        setGoods(data);
      });
  });
  return (
    <>
      <h1>Catalog</h1>

      {goods.map(({ id, title, price, description, imgUrl }) => {
        return (
          <div key={id} style={{ border: "1px solid black", margin: "10px" }}>
            <h2>
              <Link to={`/catalog/${id}`}>{title}</Link>
            </h2>
            <img src={imgUrl} alt=" " />
            <div>{description}</div>
            <div>{price}</div>
          </div>
        );
      })}
    </>
  );
};
