// Parametros: é a variável (escopo da função) que irá receber um valor em uma função
// Argumentos: é o valor que é passado para a função

// Passando o parametro username
function message(username) {
  console.log(`Olá, ${username}. É bom ter você aqui` )
}

// Passando argumentos
message("Rodrigo")
message("Ana")


function sum(a, b) {
  console.log(a + b)
}

sum(10,20)

// voce consegue definir um valor padrão dentro do parametro caso o valor dele nao seja passado no argumento
function joinText(text1, text2="", text3="") {
  console.log(text1, text2, text3)
}

//a ordem de passar os argumenos importa
joinText("Rodrgio", "Goncalves", "Santana")
joinText("Rodrgio", "Santana", "Goncalves")
joinText("Rodrigo")