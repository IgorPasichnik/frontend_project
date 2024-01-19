import Styles from "./homePage.module.css";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const HomePage = () => {
  return (
    <div className={Styles.wrapper}>
      <Button className={Styles.buttonn} type="primary">
        <Link to="/login">Вход</Link>
      </Button>
      <Button className={Styles.buttonn} type="primary">
        <Link to="/location">Геолокация</Link>
      </Button>
      <Button className={Styles.buttonn} type="primary">
        <Link to="/service">О сервисе</Link>
      </Button>
    </div>
  );
};
