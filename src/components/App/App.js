import { useEffect, useState } from "react";
// import Styles from "./app.module.css";
import Card from "../Card/Card.js";
import Spinner from "../Spinner/Spinner.js";

function App() {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(goods);
  }, [goods]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setGoods(() => data);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <>
      <h1>Список постов</h1>
      <main>
        {goods.length > 0 &&
          goods.map(({ title }) => {
            return <Card title={title} />;
          })}
      </main>
      {isLoading && <Spinner />}
    </>
  );
}

export default App;
