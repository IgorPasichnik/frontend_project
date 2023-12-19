import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CardPage = () => {
  const [good, setGood] = useState("");
  const { goodId } = useParams();

  useEffect(() => {
    fetch(
      `https://658003026ae0629a3f5420c6.mockapi.io/api/test1/goods/${goodId}`
    )
      .then((res) => res.json())
      .then((data) => setGood(data));
  }, []);
  return (
    <>
      {good === "" && null}
      {good !== "" && (
        <>
          <h2>{good.title}</h2>
          <div>{good.description}</div>
          <div>{good.price}</div>
        </>
      )}
    </>
  );
};
