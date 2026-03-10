/**
 * Calcula o IMC Índice de Massa Corporal (IMC)
 * @author Anderson Domingues
 * @since 2026-03-03
 * @version 1.0.0
 * @description essa função calcula o IMC a partir do peso e altura 
 * @param {number} peso - O peso da pessoa em kg
 * @param {number} altura - A altura da pessoa em metros
 * @returns {number} O valor do IMC calculado 
 */
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}
console.log(calcularIMC(80, 1.71)) // apenas para teste 

/**
 * obtém a classificação do IMC
 
* @author Anderson Domingues
 * @since 2026-03-03
 * @version 1.0.0
 * @description essa função calcula o IMC 
 * @param {number} imc o valor ja calculado 
 * @returns {string} a classificação do IMC ex:peso normal, sobrepeso , etc.
 */
function obterClassificacaoIMC(imc) {
    let resultado = "" //  Resultado começa vazio 
    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc < 25) {
        resultado = "Peso normal";
    } else if (imc < 30) {
        resultado = "Sobrepeso";
    } else {
        resultado = "Obesidade";

    }
    return resultado
}
// console.log(obterClassificacaoIMC(38.7))
function processaCalculo(event) {
    if (event) event.preventDefault() // evita o recarregamento da ui 
    // obtem os campos 
    const nome = document.getElementById("nome").value
    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value
    const nascimento = document.getElementById("nascimento").value
    // define area do resultado
    const divResultado = document.getElementById("resultado")
    // validaçao basica 
    if (!nome || !nascimento || isNaN(peso) || isNaN(altura)) {
        alert("Por favor, preencha todos os campos corretamente.")
        return
    }
    //efetuar os calculos com as funções criadas
    const imc = calcularIMC(peso, altura)
    const classificacao = obterClassificacaoIMC(imc)
    // mostrando o resultado
    divResultado.style.display = 'block' //volta mostra o div 
    divResultado.innerHTML = `Resultado para <strong>${nome}</strong><br>
                                IMC: <strong>${imc.toFixed(2)}</strong><br>
                                status: <strong>${classificacao}</strong>`  
}
// limpar o resultado 
document.addEventListener('reset', () =>{
    //obtemos a div que iremos limpar
    const divResultado = document.getElementById("resultado")
    //limpamos o texto da div 
    divResultado.innerHTML = ''
    // ocultamos o elemento novamente  
    divResultado.style.display = 'none' 
})