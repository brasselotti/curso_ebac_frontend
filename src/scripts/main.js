document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault();
        let numMax = document.getElementById('num-max').value;
        numMax = parseInt(numMax);

        let numAleat = Math.random() * numMax;
        numAleat = Math.floor(numAleat + 1);

    document.getElementById('nome-teste').innerText = '"Sorteador de números"';
        document.getElementById('resultado-valor').innerText = numAleat;
        document.querySelector('.resultado').style.display = 'block';
    })

    const btnPalindromos = document.getElementById('button-send');
    btnPalindromos.addEventListener('click', function() {
        palindromo();
    })

})

function palindromo() {
    let textoInserido = document.getElementById('text-palindromo').value;
    let minuscula = textoInserido.toLowerCase()
    let textoSeparado = minuscula.split("");
    let textoInvertido = textoSeparado.reverse();
    textoInvertido = textoInvertido.join("");
    console.log(textoInvertido);

    document.getElementById('text-palindromo').value = '';
    document.getElementById('nome-teste').innerText = '"Palíndromos"'

    if (textoInserido == '') {
        alert('Opa! Você não escreveu nada, insira alguma palavra para continuar.')
    } else if (textoInvertido == minuscula){
        document.getElementById('resultado-valor').innerText = (`A palavra "${textoInserido}" é um palíndromo!`);
        document.querySelector('.resultado').style.display = 'block';
    } else {
        document.getElementById('resultado-valor').innerText = (`A palavra "${textoInserido}" não é um palíndromo, tente outra!`);
        document.querySelector('.resultado').style.display = 'block';
    }
}