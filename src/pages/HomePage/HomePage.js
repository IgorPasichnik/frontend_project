import { Header } from "../../components/Header/Header";
import Styles from "./homePage.module.css";
import img_real_weather from "../../images/weatherIcons/rainbow_weather_icon_152000.png";
import img_icon1 from "../../images/weatherIcons/rain_weather_icon_151998.png";
import img_icon2 from "../../images/weatherIcons/sunny_weather_icon_152004.png";
import img_search from "../../images/search.svg";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const HomePage = () => {
  const keyWeather = "f47c862718da4050aaf70403232812";
  const item = null;
  const [location, setLocation] = useState();
  const [weather, setWeather] = useState(item);

  const handlerLocation = async (e) => {
    setWeather(null);
    e.preventDefault();

    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${keyWeather}&q=${location}`
    ).then((response) => {
      return response.json();
    });
    setWeather(response);
  };
  console.log(weather);

  return (
    <>
      <Header />
      <AnimatePresence>
        <section className={Styles.content}>
          <div className={Styles.content_box}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className={Styles.content_search}
            >
              <h1 className={Styles.content_title}>
                Прогноз погоды для тысячи городов по всему миру
              </h1>
              <form className={Styles.form_search_location}>
                <input
                  className={Styles.input_search}
                  placeholder="Город"
                  type="text"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                ></input>
                <button className={Styles.btn_search} onClick={handlerLocation}>
                  <img className={Styles.image_search} src={img_search} />
                </button>
              </form>
            </motion.div>
            {weather && (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className={Styles.content_modal}
              >
                <div className={Styles.content_modal_up}>
                  <h1>{weather.location.name}</h1>
                  <img className={Styles.img_icon} src={img_real_weather} />
                </div>
                <div className={Styles.content_modal_bottom}>
                  <div className={Styles.content_modal_block}>
                    <p>Температура</p>
                    <p>
                      <br />
                      {weather.current.temp_c} &deg;C
                    </p>
                  </div>
                  <div className={Styles.content_modal_block}>
                    <p>Ощущается как</p>
                    <p>
                      <br />
                      {weather.current.feelslike_c} &deg;C
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
        <section className={Styles.content_second}>
          <div className={Styles.content_second_info}>
            <motion.h1
              className={Styles.content_second_info_title}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Ваш источник №1 любых прогнозов погоды и обновлений. Будьте в
              курсе любых изменений погоды с WeatherToDay.
            </motion.h1>
            <motion.p
              className={Styles.content_second_info_text}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Избегайте погодных сюрпризов <br />
              <br /> WeatherToDay предоставляет инструмент планирования поездок
              с точной информацией о прогнозе погоды для оптимизации планов
              поездок. Успешное путешествие требует тщательного планирования,
              чтобы путешественники могли насладиться веселым и безопасным
              путешествием.
              <br />
              <br />
              Планировщик поездки с погодой — важный инструмент, помогающий в
              этом планировании. Этот инструмент предоставляет актуальную
              информацию о погоде для любого заданного маршрута. Это позволяет
              путешественникам принимать обоснованные решения о своих планах
              поездок в любой момент времени. <br />
              <br /> Больше информации о погоде на сегодня, Вы сможете получить
              авторизовавшись на нашем сайте.
            </motion.p>
          </div>
          <div className={Styles.content_second_containers}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={Styles.content_second_container}
            >
              <div className={Styles.content_second_container_up}>
                <h1>Лондон</h1>
                <img className={Styles.img_icon} src={img_icon1} />
              </div>
              <div className={Styles.content_second_container_bottom}>
                <div className={Styles.container_block}>
                  <p>Температура</p>
                  <p>
                    <br />4 &deg;C
                  </p>
                </div>
                <div className={Styles.container_block}>
                  <p>Ощущается как</p>
                  <p>
                    <br />2 &deg;C
                  </p>
                </div>
                <div className={Styles.container_block}>
                  <p>Скорость ветра</p>
                  <p>
                    <br />9 км/ч
                  </p>
                </div>
                <div className={Styles.container_block}>
                  <p>Осадки</p>
                  <p>
                    <br />2 мм
                  </p>
                </div>
                <div className={Styles.container_block}>
                  <p>Влажность</p>
                  <p>
                    <br />
                    82%
                  </p>
                </div>
                <div className={Styles.container_block}>
                  <p>Давление</p>
                  <p>
                    <br />
                    1088 мб
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className={Styles.content_second_container}
            >
              <div className={Styles.content_second_container_up}>
                <h1>Москва</h1>
                <img className={Styles.img_icon} src={img_icon2} />
              </div>
              <div className={Styles.content_second_container_bottom}>
                <div className={Styles.container_block}>
                  <p>Температура</p>
                  <p>
                    <br />
                    11 &deg;C
                  </p>
                </div>
                <div className={Styles.container_block}>
                  <p>Ощущается как</p>
                  <p>
                    <br />7 &deg;C
                  </p>
                </div>
                <div className={Styles.container_block}>
                  <p>Скорость ветра</p>
                  <p>
                    <br />3 км/ч
                  </p>
                </div>
                <div className={Styles.container_block}>
                  <p>Осадки</p>
                  <p>
                    <br />0 мм
                  </p>
                </div>
                <div className={Styles.container_block}>
                  <p>Влажность</p>
                  <p>
                    <br />
                    66%
                  </p>
                </div>
                <div className={Styles.container_block}>
                  <p>Давление</p>
                  <p>
                    <br />
                    1024 мб
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className={Styles.content_second_service}>
            <Button className={Styles.content_button} type="primary">
              <Link to="/service">О сервисе</Link>
            </Button>
          </div>
        </section>
      </AnimatePresence>
    </>
  );
};
