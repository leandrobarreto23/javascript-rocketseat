// Vosializar o conteudo do document
console.log(document)

// Obter o title da página
console.log(document.title)

// Acessar o elemento pelo ID
const guest = document.getElementById("guest-2")
console.log(guest)

// Mostrar propriedades do objeto
console.dir(guest)

// Acessar elemento com class
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

// exibir o primeiro item da lista
console.log(guestsByClass.item(0))
console.log(guestsByClass[1])

// Selecionar lista elementos pela tag
const guestsByTag = document.getElementsByTagName("li")
console.log(guestsByTag)