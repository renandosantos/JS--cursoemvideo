/*function calcular(){
    let num = document.getElementById(`txtnum`) 
    let res = document.getElementById(`res`)
    let n = Number(num.value)
    let contador = 0
    if(n < 2 || isNaN(n)){
        window.alert(`[ERRO]! Coloque um número maior ou igual a 2`)
        res.innerHTML = " " // limpa o resultado
        return
    }
        
    for(let i = 1;i <= n;i++){
        if(n % i ===0){
            contador++
        }   
            
    } 
    if(contador == 2){
            res.innerHTML = (`<strong>${n}</strong> é primo`)
    }else{
        res.innerHTML = (`${n} <strong>Não</strong> é primo`)
    }          
}*/
function calcular() {
    let num = document.getElementById('txtnum');
    let res = document.getElementById('res');
    let botao = document.getElementById('btn');
    let n = Number(num.value);

    // Desativa o botão, muda texto e adiciona spinner
    botao.disabled = true;
    botao.textContent = 'Verificando...';

    // Cria o spinner e adiciona ao botão
    const spinner = document.createElement('span');
    spinner.classList.add('spinner');
    botao.appendChild(spinner);

    if (n < 2 || isNaN(n)) {
        window.alert('[ERRO]! Digite um número maior ou igual a 2.');
        res.innerHTML = '';
        botao.disabled = false;
        botao.textContent = 'Testar';
        return;
    }

    let divisores = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisores.push(i);
        }
    }

    res.innerHTML = `<p><strong>${n}</strong> é divisível por: <br> ${divisores.join(', ')}</p>`;
    res.innerHTML += `<p>Tem <strong>${divisores.length}</strong> divisores.</p>`;

    if (divisores.length === 2) {
        res.innerHTML += `<p style="color: green;">✅ <strong>${n}</strong> é um número primo porque tem exatamente dois divisores: 1 e ele mesmo.</p>`;
    } else {
        res.innerHTML += `<p style="color: red;">❌ <strong>${n}</strong> não é primo porque tem mais de dois divisores.</p>`;
    }

    setTimeout(() => {
        botao.disabled = false;
        botao.textContent = 'Testar';
    }, 1500);
}

