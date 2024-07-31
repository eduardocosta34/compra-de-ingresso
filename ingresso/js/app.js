function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value
    let qtd = parseInt(document.getElementById('qtd').value)

    //Verificar se a quantidade é um número positivo
    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if(tipo == 'pista') {
        comprarPista(qtd);
    }else if(tipo == 'superior'){
        comprarSuperior(qtd);
    }else{
        comprarInferior(qtd)
    }

    //alert(`tipo ${tipo}, quantidade ${qtd}`)
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent)
    if(qtd > qtdPista) {
        alert('quantidade indisponível para Pista');
    }else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(qtd > 5){
        
    }


    if(qtd > qtdSuperior){
        alert('Quantidade indisponível para Cadeira Superior')
    }else{
        qtdSuperior = qtdSuperior - qtd
        document.getElementById('qtd-superior').textContent = qtdSuperior
        alert('Compra realizada com sucesso!')
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert('Quantidade indisponível para Cadeira Inferior')
    }else{
        qtdInferior = qtdInferior - qtd
        document.getElementById('qtd-inferior').textContent = qtdInferior
        alert('Compra realizada com sucesso!')
    }
}