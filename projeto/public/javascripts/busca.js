document.addEventListener("DOMContentLoaded", function () {
  const campoBusca = document.querySelector(".campo-busca");
  const tabelaLivros = document.querySelector(".tabela tbody");
  const linhas = tabelaLivros.getElementsByTagName("tr");

  campoBusca.addEventListener("input", function () {
    const termoBusca = this.value.toLowerCase();

    Array.from(linhas).forEach((linha) => {
      const textoLinha = linha.textContent.toLowerCase();
      linha.style.display = textoLinha.includes(termoBusca) ? "" : "none";
    });
  });
});
