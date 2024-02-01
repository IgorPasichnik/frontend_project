import { useTranslation } from "react-i18next";
import { useSpring, animated } from "@react-spring/web";
import Styles from "./app.module.css";

function App() {
  const uniqueId = require("lodash/uniqueId");
  let gfg = uniqueId("item_");
  const { t, i18n } = useTranslation();
  const spring = useSpring({
    from: { x: -200 },
    to: { x: 0 },
    config: { duration: 1000 },
  });

  const changeLanguageToEn = () => {
    i18n.changeLanguage("en");
  };

  const changeLanguageToRu = () => {
    i18n.changeLanguage("ru");
  };

  return (
    <header className={Styles.gfg}>
      {console.log(gfg)}
      <a href="#">{t("linkToHome")}</a>
      <animated.button style={{ ...spring }}>
        {t("regButtonText")}
      </animated.button>
      <animated.button style={{ ...spring }} onClick={changeLanguageToRu}>
        {t("changeLanguageButtonRu")}
      </animated.button>
      <animated.button style={{ ...spring }} onClick={changeLanguageToEn}>
        {t("changeLanguageButtonEn")}
      </animated.button>
    </header>
  );
}

export default App;
