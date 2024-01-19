import Styles from "./servicePage.module.css";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import img from "./vecteezy_free-cloud-service-vector-elements_152197.svg";

export const ServicePage = () => {
  const { Text } = Typography;

  return (
    <div className={Styles.entry}>
      <div className={Styles.entry_modal}>
        <img className={Styles.img_modal} src={img} alt="card" />
        <Text className={Styles.text_modal} strong>
          Данный сервис является тестовой формой для прохождения аттестации.
        </Text>
        <Button>
          <Link to="/">Назад</Link>
        </Button>
      </div>
    </div>
  );
};
