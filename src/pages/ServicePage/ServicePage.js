import Styles from "./servicePage.module.css";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import img from "../../images/service.svg";
import { motion, AnimatePresence } from "framer-motion";

export const ServicePage = () => {
  const { Text } = Typography;

  return (
    <div className={Styles.entry}>
      <AnimatePresence>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={Styles.entry_modal}
        >
          <img className={Styles.img_modal} src={img} alt="card" />
          <Text className={Styles.text_modal} strong>
            Данный сервис предоставляет точную информацию о погодных условиях по
            всему Земному шару в данный момент времени. Вы можете получить
            данные о температуре воздуха, скорости ветра, осадках, влажности и
            давлении. Вся информация взята из открытого источника - WeatherApi.
          </Text>
          <Button>
            <Link to="/">Назад</Link>
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
