document.addEventListener("DOMContentLoaded", function () {
  const campoBusca = document.querySelector(".campo-busca");
  const tabelaLivros = document.querySelector(".tabela tbody");
  const linhas = tabelaLivros.getElementsByTagName("tr");

  campoBusca.addEventListener("input", function () {
    const termoBusca = this.value.toLowerCase();
    let encontrouResultado = false;

    const linhaNaoEncontrado = tabelaLivros.querySelector(".nao-encontrado");
    if (linhaNaoEncontrado) {
      linhaNaoEncontrado.remove();
    }

    if (!termoBusca) {
      Array.from(linhas).forEach((linha) => {
        linha.style.display = "";
      });
      return;
    }

    Array.from(linhas).forEach((linha) => {
      const textoLinha = linha.textContent.toLowerCase();
      if (textoLinha.includes(termoBusca)) {
        linha.style.display = "";
        encontrouResultado = true;
      } else {
        linha.style.display = "none";
      }
    });

    if (!encontrouResultado) {
      const tr = document.createElement("tr");
      tr.classList.add("nao-encontrado");
      tr.innerHTML = `
        <td colspan="5" class="campo-busca--naoEncontrado">
          No momento, este livro não está em nosso acervo.
          <a href="/sugestao" class="campo-busca--sugestao">
            Gostaria de sugeri-lo para futura inclusão?
          </a>
        </td>
      `;
      tabelaLivros.appendChild(tr);
    }
  });
});
