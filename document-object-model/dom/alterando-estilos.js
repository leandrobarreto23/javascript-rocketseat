const input = document.querySelector("#name")

//adiciona a class input-error
//input.classList.add("input-error")

//remove a class input-error
// input.classList.remove("input-error")

// se nao tiver a class, adiciona. se tem, remove.
input.classList.toggle("input-error")

const button = document.querySelector("button")

// modificar as propriedades css
button.style.backgroundColor = "red"