const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/travels_controller.js");
app.use(routes);

app.listen(PORT, () => {
  console.log("App now listening at http://localhost:" + PORT);
});