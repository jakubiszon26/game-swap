const express = require('express');
const cors = require('cors');
const Data = require("./client/src/Data.json")
const fs = require("fs");
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/createOffer", function(req, res, next) {
    
  const newId = Data.offerts.length + 1;
      Data.offerts.push({
          title: req.query.title,
          description: req.query.description,
          price: req.query.price,
          pic: "/cs.png",
          category: req.query.category,
          id: newId
          });
          fs.writeFileSync("./client/src/Data.json", JSON.stringify(Data));  
          console.log(Data)  
          return("ok")
      //localhost:9000/createOffer?title=tytuł&description=opis&price=cena&pic=zdjęcie&category=kategoria
  });

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);