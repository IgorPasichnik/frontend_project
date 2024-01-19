const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const dataset = [];

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.post("/registration", async (req, res) => {
  const { user, password } = req.body;
  //console.log(req.body);

  const currentUserFromDB = dataset.find((data) => data.user === user);
  const currentPasswordFromDB = dataset.find(
    (data) => data.password === password
  );

  if (currentUserFromDB || currentPasswordFromDB) {
    res.send("Извините, пользователь с такими данными зарегистрирован");
  } else {
    dataset.push({ user, password });
    res.json({ user, password });
  }
});

app.post("/login", async (req, res) => {
  const { user, password } = req.body;
  //console.log(req.body);

  const currentUserFromDB = dataset.find((data) => data.user === user);
  const currentPasswordFromDB = dataset.find(
    (data) => data.password === password
  );

  if (currentUserFromDB && currentPasswordFromDB) {
    res.json("Авторизация прошла успешно");
  } else {
    res.send("Извините, вы ввели некорректные данные");
  }
});

app.listen(9500, () => {
  console.log("server running");
});
