$(document).ready(function() {
    $('header, button').click(function() {
        $('form').slideDown();
    })

    $('#btn-cancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const EnderecoNovaImagen = $('#endereco-imagen_nova').val();
        const NovoItem = $('<li style="display:none"></li>');

        $(`<img src="${EnderecoNovaImagen}" />`).appendTo(NovoItem);
        $(`<div class="overlay"> <a href="${EnderecoNovaImagen}" target="_blank" title="ver imagem em tamanho real" > Ver imagen em tamanho real</a> </div>`).appendTo(NovoItem);

        $(NovoItem).appendTo('ul');
        $(NovoItem).fadeIn(1500);

        $('#endereco-imagen_nova').val('');

    })

}) 
