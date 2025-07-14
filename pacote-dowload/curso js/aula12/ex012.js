var agora = new Date()
var hora = agora.getHours()
var nome = "Renan"
if(hora < 12){
if(hora < 6){
console.log(`Boa madrugada, ${nome}!`)
}else{
console.log(`Bom dia, ${nome}!`)
}
}else if(hora < 18){
console.log(`Boa tarde, ${nome}!`)
}else{
console.log(`Boa noite, ${nome}!`)
}if(hora === 12){
console.log(`Bom almoço, ${nome}`)

}
console.log(`Agora sao exatamente ${hora} horas`)


