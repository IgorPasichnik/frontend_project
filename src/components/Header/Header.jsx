import Styles from "./header.module.css";
import img_logo from "../../images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Button } from "antd";
import { useState, useEffect } from "react";

export const Header = () => {
  const location = useLocation();
  const [isLocationPage, setIsLocationPage] = useState(
    location.pathname === "/location"
  );

  useEffect(() => {
    setIsLocationPage(location.pathname === "/location");
  }, [location.pathname]);

  return (
    <section className={Styles.header}>
      <div className={Styles.header_box}>
        <div className={Styles.header_logo}>
          <img className={Styles.header_img} src={img_logo} />
          <h3 className={Styles.header_title_logo}>WeatherToDay</h3>
        </div>
        <div className={Styles.header_login}>
          {isLocationPage ? (
            <Button className={Styles.header_button} type="primary">
              <Link to="/">Выход</Link>
            </Button>
          ) : (
            <>
              <Button className={Styles.header_button} type="primary">
                <Link to="/login">Вход</Link>
              </Button>
              <Button className={Styles.header_button_link} type="link">
                <Link to="/registration">Регистрация</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
