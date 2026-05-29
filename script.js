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

// hero com digitação

const text = "Seu lar enquanto cuida de quem importa";
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeEffect() {
    if (!typingElement) return;

    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
    }
}

window.addEventListener("load", typeEffect);

// menu hamburguer

const menu = document.getElementById("menu-hamburguer");
const menuUser = document.getElementById("menu-user");

menu.addEventListener("click", () => {
    menuUser.classList.toggle("ativo");
    menu.classList.toggle("ativo");
});

// dark/light mode

const toggleTheme = document.getElementById("toggle-theme");

// aplica tema salvo ao carregar a página
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        // salva estado atual
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

// ESCONDENDO CONTEÚDO ABAIXO DA BARRA DE PESQUISA AO BUSCAR HOSPEDAGENS.

const paginaHospedagens = document.querySelector(".pagina-hospedagens");
const inputBuscaHospedagens = document.querySelector(".busca-box input");
const botaoBuscaHospedagens = document.querySelector(".busca-box button");

if (paginaHospedagens && inputBuscaHospedagens) {

    function ativarModoBusca() {
        paginaHospedagens.classList.add("modo-busca");
    }

    function verificarBuscaVazia() {
        if (inputBuscaHospedagens.value.trim() === "") {
            paginaHospedagens.classList.remove("modo-busca");
        }
    }

    inputBuscaHospedagens.addEventListener("focus", ativarModoBusca);
    inputBuscaHospedagens.addEventListener("input", ativarModoBusca);
    inputBuscaHospedagens.addEventListener("blur", verificarBuscaVazia);

    if (botaoBuscaHospedagens) {
        botaoBuscaHospedagens.addEventListener("click", ativarModoBusca);
    }
}

/* carrosel para o mobile - nossa missão & nossa visão */

const carrosselMissaoVisao = document.querySelector(".sobre-missao-visao");

if (carrosselMissaoVisao) {
    let slideAtualMissao = 0;

    function moverCarrosselMissaoVisao() {
        if (window.innerWidth > 768) return;

        const slides = carrosselMissaoVisao.querySelectorAll(".sobre-bloco");

        if (slides.length === 0) return;

        slideAtualMissao++;

        if (slideAtualMissao >= slides.length) {
            slideAtualMissao = 0;
        }

        const larguraSlide = slides[0].offsetWidth + 18;

        carrosselMissaoVisao.scrollTo({
            left: larguraSlide * slideAtualMissao,
            behavior: "smooth"
        });
    }

    setInterval(moverCarrosselMissaoVisao, 6000);
}