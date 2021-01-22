function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")     

    if(fano.value.length == 0 || fano.value > ano){
        alert("[ERRO]: Verifique os dados e tente novamente !")
    }
    else{
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    var genero = ""

    var img = document.createElement("img")
    img.setAttribute("id","foto")


    if(fsex[0].checked){ //se o fsex[0] está marcado, entao é M
        genero = "Homem"
        if(idade>=0 && idade<=10){
            img.setAttribute("src","bebeHOMEM.png")
        }else if(idade<21){
            img.setAttribute("src","jovemHOMEM.png")
        }else if(idade<60){
            img.setAttribute("src","adultoHOMEM.png")
        }else{
            img.setAttribute("src","idosoHOMEM.png")
        }
    }
    else if(fsex[1].checked){
        genero = "Mulher"
        if(idade>=0 && idade<=10){
            img.setAttribute("src","bebeMULHER.png")
        }else if(idade<21){
            img.setAttribute("src","jovemMULHER.png")
        }else if(idade<60){
            img.setAttribute("src","adultoMULHER.png")
        }else{
            img.setAttribute("src","idosoMULHER.png")
        }
    } 
    res.innerHTML = `É <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
    res.appendChild(img)
}

}