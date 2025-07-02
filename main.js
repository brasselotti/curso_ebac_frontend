$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        let tarefa = $('#tarefa').val();
        if (tarefa) {
            tarefa = tarefa.charAt(0).toUpperCase() + tarefa.slice(1).toLowerCase() + ';';
        }
        let incluirTarefa = $('<li></li>').text(tarefa);

        $(incluirTarefa).appendTo('ul')
        $('#container-list').fadeIn(500)
        $('#tarefa').val('');
    })
})