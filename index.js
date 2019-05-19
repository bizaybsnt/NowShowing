const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const ShowController = require("./controller/showController");

app.use(express.static(__dirname + '/'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get("/", ShowController.index);
app.get("/api/shows",ShowController.showApi);
app.get("/shows",ShowController.shows);



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
