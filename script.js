function onToggleMode() {
  // Se fosse no html
  // const html = document.documentElement
  const body = document.body
  // if (body.classList.contains("light-mode")) {
  //   body.classList.remove("light-mode")
  // } else {
  //   body.classList.add("light-mode")
  // }
  body.classList.toggle("light-mode")

  // Pegamos a tag img e trocamos a imagem
  const img = document.querySelector("#avatar img")
  if (body.classList.contains("light-mode")) {
    // Light Mode
    img.setAttribute("src", "./assets/my-avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto Rogério Lins com fundo verde, camiseta preta, de oculos, barba e mão no queixo, sério e sem sorrir."
    )
  } else {
    img.setAttribute("src", "./assets/my-avatar.png")
    img.setAttribute(
      "alt",
      "Foto Rogério Lins com fundo verde, camiseta preta, de oculos e barba sorrindo."
    )
  }
}
