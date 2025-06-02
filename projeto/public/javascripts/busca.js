document.addEventListener("DOMContentLoaded", function () {
  let livrosPorPagina = 7;
  let paginaAtual = 1;
  let livrosFiltrados = [];

  const linhasTabela = document.querySelectorAll(".tabela tbody tr");
  livrosFiltrados = Array.from(linhasTabela).filter(
    (tr) => !tr.querySelector('td[colspan="5"]')
  );
  atualizarPaginacao();

  const campoBusca = document.querySelector(".campo-busca");
  if (campoBusca) {
    campoBusca.addEventListener("input", (e) => {
      const termoBusca = e.target.value.toLowerCase().trim();

      const todasLinhas = document.querySelectorAll(".tabela tbody tr");
      livrosFiltrados = Array.from(todasLinhas).filter((linha) => {
        if (linha.querySelector('td[colspan="5"]')) return false;

        const titulo = linha.cells[0].textContent.toLowerCase();
        const autor = linha.cells[1].textContent.toLowerCase();
        const editora = linha.cells[2].textContent.toLowerCase();
        const edicao = linha.cells[3].textContent.toLowerCase();

        if (!termoBusca) return true;

        const palavras = termoBusca.split(" ");

        return palavras.every(
          (palavra) =>
            titulo.includes(palavra) ||
            autor.includes(palavra) ||
            editora.includes(palavra) ||
            edicao.includes(palavra)
        );
      });

      paginaAtual = 1;
      atualizarPaginacao();
    });
  }

  window.mudarPagina = function (direcao) {
    if (direcao === "anterior" && paginaAtual > 1) {
      paginaAtual--;
    } else if (
      direcao === "proxima" &&
      paginaAtual < Math.ceil(livrosFiltrados.length / livrosPorPagina)
    ) {
      paginaAtual++;
    }
    atualizarPaginacao();
  };

  function atualizarPaginacao() {
    const totalPaginas = Math.ceil(livrosFiltrados.length / livrosPorPagina);

    document.getElementById("pagina-atual").textContent = paginaAtual;
    document.getElementById("total-paginas").textContent = totalPaginas || 1;

    document.getElementById("botao-anterior").disabled = paginaAtual === 1;
    document.getElementById("botao-proximo").disabled =
      paginaAtual === totalPaginas || totalPaginas === 0;

    const paginacao = document.querySelector(".paginacao");
    if (paginacao) {
      paginacao.style.display = livrosFiltrados.length > 0 ? "flex" : "none";
    }

    mostrarLivrosPagina();
  }

  function mostrarLivrosPagina() {
    const todasLinhas = document.querySelectorAll(".tabela tbody tr");
    todasLinhas.forEach((linha) => (linha.style.display = "none"));

    if (livrosFiltrados.length === 0) {
      let mensagem = document.querySelector(
        '.tabela tbody tr td[colspan="5"]'
      )?.parentElement;
      if (!mensagem) {
        const tbody = document.querySelector(".tabela tbody");
        const tr = document.createElement("tr");
        tr.className = "nenhum-resultado";
        tr.innerHTML = `
          <td colspan="5">
            <div class="mensagem-sem-livros">
              <span>No momento, este livro não está em nosso acervo.</span>
              <a href="/sugestao" class="sugestao-link">Gostaria de sugeri-lo para futura inclusão?</a>
            </div>
          </td>
        `;
        tbody.appendChild(tr);
        mensagem = tr;
      }
      mensagem.style.display = "";
    } else {
      const mensagem = document.querySelector(
        '.tabela tbody tr td[colspan="5"]'
      )?.parentElement;
      if (mensagem) {
        mensagem.style.display = "none";
      }

      const inicio = (paginaAtual - 1) * livrosPorPagina;
      const fim = inicio + livrosPorPagina;
      livrosFiltrados
        .slice(inicio, fim)
        .forEach((linha) => (linha.style.display = ""));
    }
  }
});
