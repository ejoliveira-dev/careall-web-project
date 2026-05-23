// parte da seção contatos

const formulario = document.getElementById('formularioContato');
const modal = document.getElementById('modalSucesso');
const buttonFechar = document.getElementById('buttonFecharModal');

if (formulario && modal && buttonFechar) {
    formulario.addEventListener('submit', function (event) { // "escuta" quando alguém clica em enviar.

        event.preventDefault(); // impede a página de atualizar e sumir com as coisas.

        modal.classList.add('ativo'); // abre a abazinha de agradecimento, ao adicionar a classe "ativo".

        formulario.reset(); // limpa os campos do formulario.
    });

    buttonFechar.addEventListener('click', function () {
        modal.classList.remove('ativo'); // removendo o "ativo".
    })
}

// parte da seção projetos

document.addEventListener("DOMContentLoaded", () => {

    const botoesAbas = document.querySelectorAll(".aba-button"); // invés de pegar apenas um elemento com  'document.getElementById("ID")', usamos 'querySelectorAll(".classe")', que entra no HTML e pega todos os elementos que usam a mesma classe.
    const blocosAbas = document.querySelectorAll(".projeto-aba-bloco");

    if (botoesAbas.length > 0 && blocosAbas.length > 0) {

        botoesAbas.forEach((botao) => {

            botao.addEventListener("click", () => {

                // removendo o 'ativo' de todas as abas.
                botoesAbas.forEach((b) => {
                    b.classList.remove("ativo");
                });

                // esconde todos os conteúdos
                blocosAbas.forEach((bloco) => {
                    bloco.classList.remove("ativo");
                });

                // ativa o botão que foi clicado.
                botao.classList.add("ativo");

                // capturando o valor do atributo.
                const idAbaSelecionada = botao.dataset.aba;

                // encontra conteúdo correspondente
                const blocoAtivo = document.getElementById(`conteudo-${idAbaSelecionada}`);

                // mostra conteúdo
                if (blocoAtivo) {
                    blocoAtivo.classList.add("ativo");
                }

            });

        });
    }
});


