const express = require("express");
const cors = require("cors");
const Data = require("./client/src/Data.json");
const multer = require("multer");
const fs = require("fs");
const app = express();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'jakub',
  password: 'password',
  database: 'game-swap'
})
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
app.post("/upload", function (req, res) {
  let picName;
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    // return res.status(200).send(req.file);
    const newId = Data.offerts.length + 1;
    Data.offerts.push({
      title: req.query.title,
      description: req.query.description,
      price: req.query.price,
      pic: req.file.filename,
      category: req.query.category,
      email: req.query.email,
      id: newId,
    });
    fs.writeFileSync("./client/src/Data.json", JSON.stringify(Data));
  });
});
app.get("/", (req, res) => {
  res.send("game-swap server");
});


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
