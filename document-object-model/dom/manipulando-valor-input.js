const input = document.querySelector("input")
const form = document.querySelector("form")

/*
input.addEventListener("input", () => {
  const value = input.value
  const regex = /\D+/g

  // Retorna o padrao encontrado na string.
  // console.log(value.match(regex))

  // Testa se atende o padrao
  // const isValid = regex.test(value)
  // console.log(isValid)
})
*/

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const value = input.value
  const regex = /\D+/g

  if(regex.test(value)) {
    console.log(value)
  } else {
    alert("Valor invalido. Digite somente texto!")
  }
  
  // const value = input.value.replace(regex, "")
  // console.log(value)
})
