function contar(){
    //let tem escopo local
    let inicio = document.getElementById("txtini")
    let fim = document.getElementById("txtfim")
    let passo = document.getElementById("txtpas")
    let res = document.getElementById("res")

    //Se deixar inputs em branco
    if(passo.value.length == 0 || inicio.value.length == 0
        || fim.value.length == 0){
        res.innerHTML = "<strong>Impossível contar.</strong>"
    }
    else{
        res.innerHTML ="<strong>Contando...</strong><br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p<=0){
            alert("[ERRO] Passo inválido. Considerando Passo '1'")
            p=1
        }
        if(i<f){
        for(let c=i; c<=f; c += p){
           res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    else{
        for(let c=i; c>=f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
     }
    }
    res.innerHTML += `\u{1F3C1}`
}
}