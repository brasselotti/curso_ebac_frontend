$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        let tarefaTexto = $('#tarefa').val().trim(); // Pega o valor e remove espaços em branco extras

        if (tarefaTexto) { // Verifica se a tarefa não está vazia após o trim
            // Capitaliza apenas a primeira letra da primeira palavra
            tarefaTexto = tarefaTexto.charAt(0).toUpperCase() + tarefaTexto.slice(1).toLowerCase();

            // Crie o elemento <li> completo
            let novoLi = $('<li></li>');

            // Adicione o elemento visual da "checkbox" customizada
            let customCheckboxSpan = $('<span>').addClass('checkbox-custom');

            // Adicione o texto da tarefa
            let tarefaSpanTexto = $('<span>').addClass('tarefa-texto').text(tarefaTexto);

            // Anexe todos os elementos ao <li>
            novoLi.append(customCheckboxSpan, tarefaSpanTexto);

            // --- Adicionar a funcionalidade de clique aos novos itens ---
            novoLi.on('click', function() {
                // Alterna a classe 'checked' no span da checkbox
                $(this).find('.checkbox-custom').toggleClass('checked');
                // Alterna a classe 'completed' no próprio LI para riscar o texto
                $(this).toggleClass('completed');

                // Opcional: Você pode adicionar lógica aqui para fazer algo quando um item é 'marcado'
                if ($(this).hasClass('completed')) {
                    console.log('Tarefa concluída:', $(this).find('.tarefa-texto').text());
                } else {
                    console.log('Tarefa desmarcada:', $(this).find('.tarefa-texto').text());
                }
            });
            // --- Fim da funcionalidade de clique ---

            // Adicione o novo <li> à sua lista <ul>
            $('#minha-lista').append(novoLi); // Use o ID da sua UL aqui

            // Mostra a div container da lista (se estiver escondida)
            $('#container-list').fadeIn(500);

            // Limpa o campo de input
            $('#tarefa').val('');
        }
    });
});