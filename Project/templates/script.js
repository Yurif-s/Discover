function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "/Project/assets/cafe.png")
  } else {
    img.setAttribute("src", "/Project/assets/carga-de-trabalho.png")
  }
}
