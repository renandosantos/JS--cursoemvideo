function carregar(){
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()
msg.innerHTML = `<strong>Agora são ${hora}:${minutos}:${segundos} horas</strong>`
if(hora < 12){
 //BOA NOITE
 img.src = 'manha.jpg' 
 document.body.style.background = '#87ceeb'   
}else{if(hora < 18){
    //BOM DIA
    img.src = 'tarde.jpg'
    document.body.style.background = '#ffa500'
}else{
    //BOA TARDE
    img.src = 'noite.jpg'
    document.body.style.background = '#8a2be2'
}}

}
