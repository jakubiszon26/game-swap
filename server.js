const express = require("express");
const cors = require("cors");
const Data = require("./client/src/Data.json");
const multer = require("multer");
const fs = require("fs");
const app = express();
var mysql = require("mysql");
const cookieParser = require("cookie-parser");
var connection = mysql.createConnection({
  host: "localhost",
  user: "jakub",
  password: "password",
  database: "game-swap",
});

app.use(cors());
app.use(cookieParser());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./client/public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage }).single("file");

app.post("/uploadDB", function (req, res, fields) {
  let picName;
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    connection.query(
      `INSERT INTO offerts (title, description, category, price, pic, contact, user) VALUES ( "${req.query.title}", "${req.query.description}", "${req.query.category}", "${req.query.price}", "${req.file.filename}", "${req.query.email}", ${req.query.userId})`,
      function (err, rows, fields) {
        if (err) throw err;
        console.log("ok");
      }
    );
  });
});
app.get("/getOffers", (req, res) => {
  connection.query(
    `select * from offerts order by id desc limit 30;
  `,
    function (err, rows, fields) {
      if (err) throw err;
      console.log(rows);
      var myData = JSON.stringify(rows);
      var json = JSON.parse(myData);
      res.json(json);

      console.log("getOffers -> ok");
    }
  );
});
app.get("/offerData", (req, res) => {
  connection.query(
    `SELECT * FROM offerts WHERE id=${req.query.id}
  `,
    function (err, rows, fields) {
      if (err) throw err;
      var myData = JSON.stringify(rows);
      var json = JSON.parse(myData);
      res.json(json);
      console.log(json);
      console.log("offerData -> ok");
    }
  );
});

app.get("/login", function (req, res, fields) {
  connection.query(
    `SELECT * FROM users WHERE password="${req.query.password}" AND name="${req.query.name}"`,
    function (err, rows, results, fields) {
      if (err) throw err;
      if (rows != 0) {
        var myData = JSON.stringify(rows[0]);
        var userData = JSON.parse(myData);
        var resData = {
          isLoged: true,
          userId: userData.id,
          userName: userData.name,
        };
        res.json(resData);
        console.log("zalogowano");
      } else {
        res.json({ isLoged: false });
        console.log("nie zalogowano");
      }
    }
  );
});
app.get("/getUserData", function (req, res, fields) {
  connection.query(
    `SELECT * FROM users WHERE id="${req.query.userId}"`,
    function (err, rows, results, fields) {
      if (rows != 0) {
        var myData = JSON.stringify(rows[0]);
        var userData = JSON.parse(myData);
        var resData = {
          username: userData.name,
        };
        res.json(resData);
      }
    }
  );
});
app.get("/getUserOffers", (req, res) => {
  connection.query(
    `SELECT * FROM offerts WHERE user=${req.query.id};
  `,
    function (err, rows, fields) {
      if (err) throw err;
      if (rows != 0) {
        console.log(rows);
        var myData = JSON.stringify(rows);
        var userOffers = JSON.parse(myData);
        res.json(userOffers);
        console.log("getUserOffers -> ok");
      }
    }
  );
});

app.get("/register", (req, res) => {
  connection.query(
    `SELECT * FROM users WHERE name="${req.query.name}"
  `,
    function (err, rows, fields) {
      if (err) throw err;
      if (rows != 0) {
        console.log("istnieje juz uzytkownik o takiej nazwie");
        let resText = { resText: "Istnieje już użytkownik o takiej nazwie" };
        res.json(resText);
      } else if (rows == 0) {
        connection.query(
          `INSERT INTO users (name, password) VALUES ("${req.query.name}", ${req.query.password})`,
          function (err) {
            if (err) throw err;
            resText = { resText: "Pomyślnie utworzono użytkownika, Możesz się teraz zalogować" };
            res.json(resText);
          }
        );
      }
    }
  );
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
