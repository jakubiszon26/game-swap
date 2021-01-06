const express = require("express");
const cors = require("cors");
const Data = require("./client/src/Data.json");
const multer = require("multer");
const fs = require("fs");
const app = express();
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "jakub",
  password: "password",
  database: "game-swap",
});

app.use(cors());

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
      `INSERT INTO offerts (title, description, category, price, pic, contact) VALUES ( "${req.query.title}", "${req.query.description}", "${req.query.category}", "${req.query.price}", "${req.file.filename}", "${req.query.email}")`,
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
        var resData = { isLoged: true, userId: userData.id };
        res.json(resData);
        console.log("zalogowano");
      } else {
        res.json({ isLoged: false });
        console.log("nie zalogowano");
      }
    }
  );
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
