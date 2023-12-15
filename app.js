const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const mainRoutes = require("./src/routes/mainRoutes");
const shopRoutes = require("./src/routes/shopRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");

app.use(express.static(path.join(__dirname, "public")));

hbs.registerPartials(
  path.join(__dirname, "src", "views", "partials"),
  function (err) {
    if (err) {
      console.error("Error al registrar parciales:", err);
    }
  }
);

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "hbs");

app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

app.use((req, res, next) => {
  res.status(404).send("Página no encontrada");
});

app.listen(4000, () => console.log("servidor corriendo en localhost:4000"));
