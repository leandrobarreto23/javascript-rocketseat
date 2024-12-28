const ul = document.querySelector("ul")

ul.addEventListener("scroll", (event) => {
  if(ul.scrollTop >= 303 ) {
    console.log("Fim da lista!")

    // scrollTo é uma função que recebe um objeto e leva o usuario ao topo da página
    ul.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }
})

const button = document.querySelector("button")

button.addEventListener("click", (event) => {
  event.preventDefault()

  console.log("Clicou!")
})