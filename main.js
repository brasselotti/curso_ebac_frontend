const form = document.getElementById('form');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const feedback = document.getElementById('feedback');

function compararNumeros(a,b){
    if(b>a){
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let valorA = campoA.value;
    let valorB = campoB.value;

    const feedbackPositivo = `Formulário válido!<br>O valor do campo B (${valorB}) é maior que o valor do campo A (${valorA}).`;
    const feedbackNegativo = `Formulário inválido!<br>O valor do campo A (${valorA}) é maior que o valor do campo B (${valorB}).`;
    const feedbackIgual = `Formulário inválido!<br>O valor do campo A (${valorA}) é igual o valor do campo B (${valorB}).`;

    if (compararNumeros(valorA,valorB)) {
        feedback.style.height = 'auto';
        feedback.innerHTML = feedbackPositivo;
        feedback.classList.add('valido');
    } else if (valorA === valorB) {
        feedback.style.height = 'auto';
        feedback.innerHTML = feedbackIgual;
        feedback.classList.add('invalido');
    } else {
        feedback.style.height = 'auto';
        feedback.innerHTML = feedbackNegativo;
        feedback.classList.add('invalido');
    }

    campoA.value = 0;
    campoB.value = 0;
})

form.addEventListener('reset', function(e){
    e.preventDefault()

    feedback.textContent = 'Insira os valores dos campos A e B.';
    feedback.classList.remove('valido','invalido')
})