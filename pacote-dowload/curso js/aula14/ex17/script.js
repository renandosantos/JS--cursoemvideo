function calcular(){
    let numero = document.getElementById(`txttab`)
    let tab = document.getElementById(`seltab`)
    if(numero.value.length == 0){
        window.alert(`Digite um número`)
    }else {
        let n = Number(numero.value)
        tab.innerHTML = ''
        for(let c = 1;c<=10;c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)  
        }
    }
    

}