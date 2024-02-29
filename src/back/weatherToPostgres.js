const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { pool } = require("./dataBase");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/api/weather", async (req, res) => {
  try {
    const {
      name,
      temp_c,
      feelslike_c,
      wind_kph,
      precip_mm,
      humidity,
      pressure_mb,
    } = req.body;

    const queryText = `
      INSERT INTO weather (name, temp_c, feelslike_c, wind_kph, precip_mm, humidity, pressure_mb)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [
      name,
      temp_c,
      feelslike_c,
      wind_kph,
      precip_mm,
      humidity,
      pressure_mb,
    ];
    const result = await pool.query(queryText, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("server Error");
  }
});

app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
