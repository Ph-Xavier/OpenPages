const conexao = require("../config/conexao");

module.exports = {
  getAllLivros,
  getLivrosByCurso,
  getLivroById,
  addSugestao,
  verificarSugestaoDuplicada,
  searchLivros,
  getLivrosDisponiveis,
};

// Funções de Livros

function getAllLivros(callback) {
  const sql = "SELECT * FROM Livro";
  conexao.query(sql, callback);
}

function getLivrosByCurso(idCurso, callback) {
  const sql =
    "SELECT titulo, autor, editora, edicao, materia, palavras_chave, id_curso, disponibilidade FROM Livro WHERE id_curso = ?";
  conexao.query(sql, [idCurso], callback);
}

function getLivroById(idLivro, callback) {
  const sql = "SELECT * FROM Livro WHERE id_livro = ?";
  conexao.query(sql, [idLivro], callback);
}

// Funções de Sugestões de Livros

function addSugestao(sugestao, callback) {
  const sql = `INSERT INTO SugestaoDeLivro (livro_sugerido, autor, editora, 
                     id_curso, motivo) VALUES (?, ?, ?, ?, ?)`;
  const valores = [
    sugestao.livro_sugerido,
    sugestao.autor,
    sugestao.editora,
    sugestao.id_curso,
    sugestao.motivo,
  ];
  conexao.query(sql, valores, callback);
}

function verificarSugestaoDuplicada(sugestao, callback) {
  const sql = `SELECT * FROM SugestaoDeLivro 
               WHERE livro_sugerido = ? 
               AND autor = ? 
               AND id_curso = ?`;
  const valores = [sugestao.livro_sugerido, sugestao.autor, sugestao.id_curso];
  conexao.query(sql, valores, callback);
}

// Funções De Busca

function searchLivros(termo, callback) {
  const sql = `SELECT titulo, autor, editora, edicao FROM Livro 
               WHERE titulo LIKE ? 
               OR autor LIKE ? 
               OR palavras_chave LIKE ?`;
  const termoBusca = `%${termo}%`;
  conexao.query(sql, [termoBusca, termoBusca, termoBusca], callback);
}

function getLivrosDisponiveis(callback) {
  const sql =
    "SELECT titulo, autor, editora, edicao FROM Livro WHERE disponibilidade = true";
  conexao.query(sql, callback);
}
