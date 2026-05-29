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

    const botoesAbas = document.querySelectorAll(".aba-button");
    const blocosAbas = document.querySelectorAll(".projeto-aba-bloco");

    if (botoesAbas.length > 0 && blocosAbas.length > 0) {

        function ativarAba(nomeAba) {
            // remove o ativo de todos os botões
            botoesAbas.forEach((botao) => {
                botao.classList.remove("ativo");
            });

            // esconde todos os blocos de conteúdo
            blocosAbas.forEach((bloco) => {
                bloco.classList.remove("ativo");
            });

            // encontra o botão e o conteúdo correspondentes
            const botaoAtivo = document.querySelector(`.aba-button[data-aba="${nomeAba}"]`);
            const blocoAtivo = document.getElementById(`conteudo-${nomeAba}`);

            // ativa somente se existirem
            if (botaoAtivo && blocoAtivo) {
                botaoAtivo.classList.add("ativo");
                blocoAtivo.classList.add("ativo");
            }
        }

        // clique manual nas abas dentro da página projetos
        botoesAbas.forEach((botao) => {
            botao.addEventListener("click", () => {
                const abaSelecionada = botao.dataset.aba;

                ativarAba(abaSelecionada);

                // atualiza a URL sem recarregar a página
                window.history.replaceState(null, "", `projetos.html?aba=${abaSelecionada}`);
            });
        });

        // verifica se veio do index com ?aba=pacientes, ?aba=acompanhantes ou ?aba=voluntarios
        const parametros = new URLSearchParams(window.location.search);
        const abaUrl = parametros.get("aba");

        if (abaUrl) {
            ativarAba(abaUrl);
        } else {
            ativarAba("pacientes");
        }
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

const menuHamburguer = document.getElementById("menu-hamburguer");
const menuUser = document.getElementById("menu-user");

if (menuHamburguer && menuUser) {
    menuHamburguer.addEventListener("click", (event) => {
        event.stopPropagation();

        menuHamburguer.classList.toggle("ativo");
        menuUser.classList.toggle("ativo");
    });

    menuUser.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    document.addEventListener("click", () => {
        menuHamburguer.classList.remove("ativo");
        menuUser.classList.remove("ativo");
    });
}

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

// modal de detalhes dos projetos

document.addEventListener("DOMContentLoaded", () => {
    const botoesModalProjeto = document.querySelectorAll(".abrir-modal-projeto");
    const modalProjeto = document.getElementById("modal-projeto");
    const fecharModalProjeto = document.getElementById("fechar-modal-projeto");

    const modalCategoria = document.getElementById("modal-categoria");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDescricao = document.getElementById("modal-descricao");
    const modalImpacto = document.getElementById("modal-impacto");
    const modalAcao = document.getElementById("modal-acao");

    if (
        botoesModalProjeto.length > 0 &&
        modalProjeto &&
        fecharModalProjeto &&
        modalCategoria &&
        modalTitulo &&
        modalDescricao &&
        modalImpacto &&
        modalAcao
    ) {
        botoesModalProjeto.forEach((botao) => {
            botao.addEventListener("click", () => {
                modalCategoria.textContent = botao.dataset.categoria;
                modalTitulo.textContent = botao.dataset.titulo;
                modalDescricao.textContent = botao.dataset.descricao;
                modalImpacto.textContent = botao.dataset.impacto;

                modalAcao.textContent = botao.dataset.acao || "Ação indisponível no protótipo";

                modalProjeto.classList.add("ativo");
            });
        });

        modalAcao.addEventListener("click", () => {
            alert("Esta ação é demonstrativa. Em uma versão real da Care.All, essa opção levaria para uma área específica de solicitação, inscrição ou atendimento.");
        });

        function fecharModal() {
            modalProjeto.classList.remove("ativo");
        }

        fecharModalProjeto.addEventListener("click", fecharModal);

        modalProjeto.addEventListener("click", (event) => {
            if (event.target === modalProjeto) {
                fecharModal();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                fecharModal();
            }
        });
    }
});

// menu ativo por página atual

document.addEventListener("DOMContentLoaded", () => {
    const linksMenu = document.querySelectorAll("header nav a");
    const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

    linksMenu.forEach((link) => {
        const hrefLink = link.getAttribute("href");

        if (hrefLink === paginaAtual) {
            link.classList.add("ativo");
        }
    });
});