// Función para cargar el encabezado y el pie de página
// function loadHeaderAndFooter() {
//   // Cargar el encabezado
//   fetch("/components/header.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.querySelector("header").innerHTML = data;
//     });

//   // Cargar el pie de página
//   fetch("/components/footer.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.querySelector("footer").innerHTML = data;
//     });
// }

// loadHeaderAndFooter();

const express = require("express");
const app = express();
const mainRoutes = require("./src/routes/mainRoutes");
const shopRoutes = require("./src/routes/shopRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");

app.use(express.static("public_html"));

app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

app.listen(4000, () => console.log("servidor corriendo en localhost:4000"));
