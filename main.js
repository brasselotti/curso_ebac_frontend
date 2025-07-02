$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        let tarefa = $('#tarefa').val();
        if (tarefa) {
            tarefa = tarefa.charAt(0).toUpperCase() + tarefa.slice(1).toLowerCase() + ';';
        }
        let incluirTarefa = $('<li></li>');

        incluirTarefa.attr({
            'tabindex': '0',       // Torna o LI focável com a tecla Tab
            'role': 'checkbox',    // Informa ao leitor de tela que é uma checkbox
            'aria-checked': 'false' // Estado inicial: desmarcado
        });

        let customCheckboxSpan = $('<span>').addClass('checkbox-custom');

        let tarefaSpanTexto = $('<span>').addClass('tarefa-texto').text(tarefa);

        incluirTarefa.append(customCheckboxSpan, tarefaSpanTexto);

        $(incluirTarefa).appendTo('#minha-lista')
        $('#container-list').fadeIn(1000)
        $('#tarefa').val('');

        const toggleCheckboxState = function() {
            let isChecked = $(this).attr('aria-checked') === 'true'; // Verifica o estado ARIA atual

            // Alterna a classe 'checked' no span da checkbox
            $(this).find('.checkbox-custom').toggleClass('checked');
            // Alterna a classe 'completed' no próprio LI para riscar o texto
            $(this).toggleClass('completed');

            // Alterna o atributo aria-checked
            $(this).attr('aria-checked', !isChecked); // Inverte o estado

            // Opcional: Lógica para console
            if (!isChecked) {
                console.log('Tarefa concluída:', $(this).find('.tarefa-texto').text());
            } else {
                console.log('Tarefa desmarcada:', $(this).find('.tarefa-texto').text());
            }
        };

        // Evento de clique para mouse
        incluirTarefa.on('click', toggleCheckboxState);

        incluirTarefa.on('keydown', function(event) {
            // Verifica se a tecla pressionada é Enter (código 13) ou Espaço (código 32)
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // Impede o scroll da página ao pressionar Espaço
                toggleCheckboxState.call(this); // Chama a função de alternar estado
            }
        });
    });
});