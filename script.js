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

//ex6//
let calcular4 = function(){
  let entrada1 = document.getElementById("v1").value
  let entrada2 = document.getElementById("v2").value
  let entrada3 = document.getElementById("v3").value
  let entrada4 = document.getElementById("vNegat").value
  let v1 = parseInt(entrada1)
  let v2 = parseInt(entrada2)
  let v3 = parseInt(entrada3)
  let vNegat = parseInt(entrada4)

  if((vNegat < 0)&&(v1 > 0)&&(v2 > 0)&&(v3 > 0)){
    let maior = Math.max(v1, v2, v3)
    document.getElementById("saida4").innerHTML = "O maior valor é: " + maior
  }else{
    document.getElementById("saida4").innerHTML = "Insira valores positivos e negativos corretamente!"
  }
}

//ex7//
let calcular5 = function(){
  let array = [1,2,3,4,5,6,7,8,9,10]
  let impares = []
  let saida = document.getElementById("saida5");

  for (let i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
      impares.push(array[i])
    }
  } 

  saida.innerHTML = `${impares}`
}

//ex8//
let calcular6 = function(){
  let saida = document.getElementById("saida6");
  let nome = document.getElementById("entradaNome").value;
  let nomeInvertido = nome.split([]).reverse().join("")
  saida.innerHTML=nomeInvertido
}

//ex9//


//ex10//