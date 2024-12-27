const guests = document.querySelector("ul")

const newGuest = document.createElement("li")

const guestName = document.createElement("span")
guestName.textContent = "Diego"

const guestSurname = document.createElement("span")
guestSurname.textContent = "Fernandes"

// adiciona após o ultimo filho
newGuest.append(guestName)
// adiciona antes do primeiro filho
newGuest.prepend(guestSurname)

console.log(newGuest)