/*for(var n = 1;n <= 10;n++){
    console.log(`${n}`)
}

let c = 10
while(c >= 0){
    console.log(`${c}`) 
    c--
}console.log('BOOM!')*/


/*TABUADA
let num = 5 
    console.log(`Tabuada do ${num}`)   
for(let a = 0;a <=10;a++){
    
    console.log(`${num} X ${a} = ${num*a}`)
}*/

/*4. Soma dos pares de 1 a 100
let soma = 0
for(let i = 1;i <= 100;i++) {
    if(i % 2 === 0) {
        soma += i
    }
}console.log(`A soma de todos os numeros pares é ${soma}.`)*/

/*quantos são maiores que 10
let numeros = [3, 7, 12, 19, 5, 21, 1, 8];
let contador = 0;
let maioresque10 = [];
for(let i = 0;i < numeros.length;i++ ){
    if(numeros[i] > 10){
        contador++
        maioresque10.push(numeros[i])
    }
}
console.log(`Quantidade de números maiores que 10: ${contador}`);
console.log(`o numeros maiores que 10 são ${maioresque10}`)*/

//Crie uma função que recebe um número e retorna o fatorial dele.
let numero = 10
let resultado = 1
let conta =  " "
    for(let i = numero;i >= 1;i--){
        resultado *= i

    if(i> 1){
        conta += `${i} x `
    }else{
        conta += `${i} = `
    }
}
    conta += `${resultado}`; // adiciona o resultado final na string

console.log(`Fatorial de ${numero}: ${conta}`);