function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex =document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'masculino'
            if(idade >=0 && idade < 5){
                //BEBÊ
                img.setAttribute('src','nenem homem.jpg')
            }else{
                if(idade < 18){
                    //ADOLESCENTE
                    img.setAttribute('src','adolescente homem.jpg')
                }else{
                    if(idade < 60){
                        //ADULTO
                        img.setAttribute('src','adulto homem.jpg')
                    }else{
                        //IDOSO
                        img.setAttribute('src','idoso homem.jpg')
                    }
                }
            }
        }else{ if(fsex[1].checked){
            gênero = 'Feminino'
            if(idade >=0 && idade < 5){
                //BEBÊ
                img.setAttribute('src','nenem mulher.jpg')
            }else{
                if(idade < 18){
                    //ADOLESCENTE
                    img.setAttribute('src','adolescente mulher.jpg')
                }else{
                    if(idade < 60){
                        //ADULTO
                        img.setAttribute('src','adulto mulher.jpg')
                    }else{
                        //IDOSO
                        img.setAttribute('src','idoso mulher.jpg')
                    }
                }
            }
        }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos o sexo <strong>${gênero}</strong> com <strong>${idade}</strong> anos` 
        res.appendChild(img)
    }
}