// Callback function é uma funcao passada para outra funcao como argumento

function execute(taskName, callback) {
  console.log("Executando a tarefa: ", taskName)

  callback()
}

function callback() {
  console.log("Tarefa finalizada.")
}

// passando para a funcao
execute("Donwload do arquivo...", callback)

// criando a funcao no proprio parametro (funcao anonima)
execute("Upload do arquivo...", function() {
  console.log("Funcao de callback com uma funcao anonima.")
})

// utilizando aroow function
execute("Excluindo arquivo...", () => {
  console.log("Arquivo excluido!")
})


execute("Salvando arquivo...", () => console.log("Arquivo salvo!"))