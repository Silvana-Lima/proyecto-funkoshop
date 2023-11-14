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

app.use(express.static("public_html"));

app.get("/ping", (req, res) => res.send("pong"));

app.listen(4000, () => console.log("servidor corriendo en puerto 4000"));
