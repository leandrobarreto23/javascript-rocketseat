//Funcao anonima (funcao que nao possui nome)

const showMessage = function() {
  return "Ola, Rodrigo"
}

console.log(showMessage())

const showMessage2 = function(name) {
  return "Olá, " + name
}

console.log(showMessage2("Joao"))