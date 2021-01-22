var agora = new Date()
var dia = agora.getDay()

/*  domingo - 0
    segunda - 1
    terça - 2
    quarta - 3
    quinta - 4
    sexta - 5
    sabado - 6
*/
switch(dia){
    case 0: console.log("Hoje é DOMINGO") 
    break
    case 1: console.log("Hoje é SEGUNDA-FEIRA") 
    break
    case 2: console.log("Hoje é TERÇA-FEIRA") 
    break
    case 3: console.log("Hoje é QUARTA-FEIRA") 
    break
    case 4: console.log("Hoje é QUINTA-FEIRA")
     break
    case 5: console.log("Hoje é SEXTA-FEIRA") 
    break
    case 6: console.log("Hoje é SÁBADO")
     break
    default: console.log("erro")
    break
}