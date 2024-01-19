import Styles from "./locationPage.module.css";
import { Button, Input, Space, Typography, Table } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LocationPage = () => {
  const { Title } = Typography;
  const items = 0;
  const keyWeather = "f47c862718da4050aaf70403232812";
  const [location, setLocation] = useState("");
  const [weathers, setWeathers] = useState(items);

  const locationHandler = async (e) => {
    e.preventDefault();
    const payload = {
      location: location,
    };
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${keyWeather}&q=${payload.location}`
    ).then((response) => {
      return response.json();
    });
    setWeathers(response);
  };

  if (weathers === 0)
    return (
      <div className={Styles.entry}>
        <div className={Styles.entry_modal}>
          <Typography>
            <Title level={2}>Геолокация</Title>
          </Typography>
          <Space diraction="vertical">
            <Input
              className={Styles.entry_input}
              placeholder="Location"
              name="location"
              type=""
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            ></Input>
            <Button type="primary" onClick={locationHandler}>
              Получить
            </Button>
          </Space>
          <div>
            <Button>
              <Link to="/">Назад</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  else {
    const name = weathers.location.name;
    const country = weathers.location.country;
    const temp_c = weathers.current.temp_c;
    const wind_kph = weathers.current.wind_kph;
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Country",
        dataIndex: "country",
        key: "country",
      },
      {
        title: "Temperature",
        dataIndex: "temp_c",
        key: "temp_c",
      },
      {
        title: "Wind speed",
        dataIndex: "wind_kph",
        key: "wind_kph",
      },
    ];
    const data1 = [
      {
        name: name,
        country: country,
        temp_c: temp_c,
        wind_kph: wind_kph,
      },
    ];
    return (
      <div className={Styles.entry}>
        <div className={Styles.entry_modal}>
          <Typography>
            <Title level={2}>Weather</Title>
          </Typography>
          <Table
            rowKey="id"
            columns={columns}
            dataSource={data1}
            pagination={false}
          />
          <Space diraction="vertical"></Space>
          <div>
            <Button>
              <Link to="/">Назад</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
};
