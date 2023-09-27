// Función para cargar el encabezado y el pie de página
function loadHeaderAndFooter() {
  // Cargar el encabezado
  fetch("/components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("header").innerHTML = data;
    });

  // Cargar el pie de página
  fetch("/components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("footer").innerHTML = data;
    });
}

loadHeaderAndFooter();
