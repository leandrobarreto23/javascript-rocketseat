const input = document.querySelector("input")

// keydown - quando uma tecla é pressionada (captura tudo, incluindo CTRL, SHIFT, etc...)
input.addEventListener("keydown", (e) => {
  console.log(e.key)
})

// Keypress - quando uma tecla do tipo caractere é pressionada (letras, numeros, pontos, etc...), ignora teclas como shift, ctrl, etc...
input.addEventListener("keypress", (e) => {
  console.log(e.key)
})

// Onchange - dispara a ação após o usuário modificar o valor e sair do campo (perder o foco)
input.onchange = () => inputChange()

function inputChange() {
  console.log("o input mudou!")
}