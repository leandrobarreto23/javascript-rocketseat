// FALSY quando um valor é considerado false
// TRUTHY quando é considerado verdadeiro em contextos onde um boolean é obrigatório (condicionais e loops)

console.log('Exemplo de FALSY')
console.log(false ? "verdadeiro" : "falso")
console.log(0 ? "verdadeiro" : "falso")
console.log(-0 ? "verdadeiro" : "falso")
console.log("" ? "verdadeiro" : "falso")
console.log(null ? "verdadeiro" : "falso")
console.log(undefined ? "verdadeiro" : "falso")
console.log(NaN ? "verdadeiro" : "falso")


console.log('Exemplo de TRUTHY')
console.log(true ? "verdadeiro" : "falso")
console.log({} ? "verdadeiro" : "falso")
console.log([] ? "verdadeiro" : "falso")
console.log(1 ? "verdadeiro" : "falso")
console.log(3.23 ? "verdadeiro" : "falso")
console.log("0" ? "verdadeiro" : "falso")
console.log("Rodrigo" ? "verdadeiro" : "falso")
console.log(" " ? "verdadeiro" : "falso")
console.log(-1 ? "verdadeiro" : "falso")
console.log(Infinity ? "verdadeiro" : "falso")