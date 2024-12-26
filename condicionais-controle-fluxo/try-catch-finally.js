try {
    //tenta executar algo
    console.log(result)
} catch (error) {
    //captura o erro para tratar
    console.log(error)
    console.log("Não foi possivel executar seu pedido. Tente novamente mais tarde!")
} finally {
    //executar algo independente se deu certo ou errado
    console.log("fim")
}

let result = 0

try {
    if(result === 0) {
        //cria um novo erro diferente do criado no catch
        throw new Error("O valor é igual a zero")
    }
} catch (error) {
    console.log(error)
} finally {
    console.log("fim")
}