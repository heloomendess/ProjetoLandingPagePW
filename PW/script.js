// console.log("Olá mundo")

//alert("Login inválido")

// console.log(document.querySelector("#qtdDePaginas").value);

document.querySelector("#qtdDePaginas").addEventListener("change", calcular)
document.querySelector("#tipoDeSite").addEventListener("change", calcular)
document.querySelector("#prototipo_sim").addEventListener("change", calcular)
document.querySelector("#prototipo_nao").addEventListener("change", calcular)
document.querySelector("#js").addEventListener("change", calcular)

document.querySelector("#prazo").addEventListener("input", function() {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerText 
            = `Prazo: ${prazo} semanas`
    calcular()        
})


function calcular() {
    //100 reais  cada página
    const qtde = document.querySelector("#qtdDePaginas").value
    let preco = qtde * 100;
    //console.log(preco)

    const tipo = document.querySelector("#tipoDeSite").value
    if(tipo == 2) {
        preco += 1000
    }


    const need_prototipo = document.querySelector('#prototipo_sim').checked
    if (need_prototipo) {
        preco += qtde * 50
    }

    //console.log(prototipo)

    const prazo = document.querySelector('#prazo').value
    const taxa_de_urgencia = 1 - prazo * 0.05
    preco += 1 * taxa_de_urgencia

    document.querySelector('#preco').innerText = "R$ " + preco.toFixed(2)

}