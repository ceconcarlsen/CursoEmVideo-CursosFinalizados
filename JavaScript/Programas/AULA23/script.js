let vetor = []

let num = document.getElementById("txtnum")
let select = document.getElementById("select")
let res = document.getElementById("res")

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }
    return false
}

function inLista(n,l){
    for(var i=0;i<l.length;i++){
        if(l[i] == n)return true
    }
    return false
}

function adicionar(){
if(isNumero(num.value) && !inLista(num.value, vetor)){ //Se for um número válido e não está na lista

   vetor.push(Number(num.value)) //Adicionando no vetor

   let item = document.createElement("option") //Parte gráfica
   item.text = `Valor ${num.value} adicionado`
   select.appendChild(item)
   res.innerHTML = ""
}
else{
    alert("[ERRO] valor inválido.")
}
num.value =""
num.focus()
}

function finalizar(){
    if(vetor.length == 0){
        alert("[ERRO] adicione valores.")
    }
    else{
        let total = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0

        for(var i=0;i<vetor.length;i++){

            soma += vetor[i]

            if(vetor[i]>maior){
                maior = vetor[i]
            }
            if(vetor[i]<menor){
                menor = vetor[i]
            }
        }

        media = soma/total

        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo temos, ${total} números adicionados.</p>`
        res.innerHTML += `<p>MAIOR valor é ${maior}, e o MENOR é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma} .</p>`
        res.innerHTML += `<p>A médoa dos valores é ${media}.</p>`
    }
}