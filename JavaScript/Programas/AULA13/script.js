function carregar(){
var msg = document.getElementById("msg")
var img = document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `<strong>Agora são ${hora} horas</strong>.`

if(hora >=0 && hora<12){
    img.src = "manha.png"
    document.body.style.background = "green"
}
else if(hora >=12 && hora<18){
    img.src = "tarde.png"
    document.body.style.background = "orange"
}
else{
    img.src = "manha2.png"
    document.body.style.background = "darkblue"
}
}
