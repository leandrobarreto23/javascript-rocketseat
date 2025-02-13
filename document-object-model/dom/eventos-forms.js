const form = document.querySelector("form")

form.onsubmit = (e) => {
  e.preventDefault()
  console.log("vc fez submit no formulario")
}