const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname + "/public")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(process.env.PORT, () => {
  console.log("connected to server at port 3000 :)!");
});
