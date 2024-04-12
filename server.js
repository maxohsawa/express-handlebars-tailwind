const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

// Set up Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Home route
app.get("/", (req, res) => {
  res.render("home");
});
app.use(express.static("public"));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
