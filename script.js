//ex2//
let calcular1 = function (){
   let valorUm = document.getElementById("valorUm").value
   let valorDois = document.getElementById("valorDois").value
   let entradaUm = parseInt(valorUm)
   let entradaDois = parseInt(valorDois)

   let soma =  entradaUm + entradaDois
   let saida = document.getElementById("saida1")
   saida.innerHTML = "Resultado é = " + soma
}

//ex3//
let calcular2 = function(){
   let trabalho = document.getElementById("trabalho").value
   let ativ = document.getElementById("atividades").value
   let partic = document.getElementById("particip").value
   let prova = document.getElementById("prova").value
   let saida = document.getElementById("saida2")
   let entradaUm = parseInt(trabalho)
   let entradaDois = parseInt(ativ)
   let entradaTres = parseInt(partic)
   let entradaQuatro = parseInt(prova)
 
   let notaFinal = (entradaUm+entradaDois+entradaTres+entradaQuatro)/4
 
   if(notaFinal > 7){
     console.log("Aprovado")
     saida.innerHTML = "Aprovado"
   }
   else{
     console.log("Reprovado")
     saida.innerHTML = "Reprovado"
   }
 
 }

//ex5//
let calcular3 = function(){
  let valor = document.getElementById("valor").value
  let entrada = parseInt(valor)
  let saida = document.getElementById("saida3");

  let zero = entrada * 0
  let um = entrada * 1
  let dois = entrada * 2
  let tres = entrada * 3
  let quatro = entrada * 4
  let cinco = entrada * 5
  let seis = entrada * 6
  let sete = entrada * 7
  let oito = entrada * 8
  let nove = entrada * 9
  let dez = entrada * 10

  saida.innerHTML = `0 x ${entrada} = ${zero},<br>
   1 x ${entrada} = ${um},<br>
   2 x ${entrada} = ${dois},<br>
   3 x ${entrada} = ${tres},<br>
   4 x ${entrada} = ${quatro},<br>
   5 x ${entrada} = ${cinco},<br>
   6 x ${entrada} = ${seis},<br>
   7 x ${entrada} = ${sete},<br>
   8 x ${entrada} = ${oito},<br>
   9 x ${entrada} = ${nove},<br>
   10 x ${entrada} = ${dez}.<br>`
}