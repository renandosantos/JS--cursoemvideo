let num = [1,3,5,6,7,13]
num[6] = 20
/*for(let pos = 0 ;pos <num.length ;pos++){
console.log(`A posição ${pos} tem o valor ${num[pos]}`)    
}*/
for(let pos in num ){
    console.log(num[pos])
}
console.log(num.indexOf(5))
