// parte da seção contatos

const formulario = document.getElementById('formularioContato');
const modal = document.getElementById('modalSucesso');
const buttonFechar = document.getElementById('buttonFecharModal');

formulario.addEventListener('submit', function(event) { // "escuta" quando alguém clica em enviar.

    event.preventDefault(); // impede a página de atualizar e sumir com as coisas.

    modal.classList.add('ativo'); // abre a abazinha de agradecimento, ao adicionar a classe "ativo".

    formulario.reset(); // limpa os campos do formulario.
});

buttonFechar.addEventListener('click', function() {
    modal.classList.remove('ativo'); // removendo o "ativo".
})

// parte da seção projetos
