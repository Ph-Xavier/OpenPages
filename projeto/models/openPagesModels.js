const conexao = require("../config/conexao");

module.exports = {
  getAllLivros,
  getLivrosByCurso,
  getLivroById,
  addLivro,
  updateLivro,
  getAllSugestoes,
  addSugestao,
  updateStatusSugestao,
  getAllCursos,
  getCursoById,
  searchLivros,
  getLivrosDisponiveis,
};

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

function addLivro(livro, callback) {
  const sql = `INSERT INTO Livro (titulo, autor, editora, edicao, 
                     materia, palavras_chave, id_curso, disponibilidade) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const valores = [
    livro.titulo,
    livro.autor,
    livro.editora,
    livro.edicao,
    livro.materia,
    livro.palavras_chave,
    livro.id_curso,
    livro.disponibilidade,
  ];
  conexao.query(sql, valores, callback);
}

function updateLivro(idLivro, livro, callback) {
  const sql = `UPDATE Livro SET titulo = ?, autor = ?, editora = ?, 
                     edicao = ?, materia = ?, palavras_chave = ?, 
                     id_curso = ?, disponibilidade = ? 
                     WHERE id_livro = ?`;
  const valores = [
    livro.titulo,
    livro.autor,
    livro.editora,
    livro.edicao,
    livro.materia,
    livro.palavras_chave,
    livro.id_curso,
    livro.disponibilidade,
    idLivro,
  ];
  conexao.query(sql, valores, callback);
}

function getAllSugestoes(callback) {
  const sql =
    "SELECT s.*, c.nome_curso FROM SugestaoDeLivro s JOIN Curso c ON s.id_curso = c.id_curso";
  conexao.query(sql, callback);
}

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

function updateStatusSugestao(idSugestao, status, callback) {
  const sql =
    "UPDATE SugestaoDeLivro SET status_sugestao = ? WHERE id_sugestao = ?";
  conexao.query(sql, [status, idSugestao], callback);
}

function getAllCursos(callback) {
  const sql = "SELECT * FROM Curso";
  conexao.query(sql, callback);
}

function getCursoById(idCurso, callback) {
  const sql = "SELECT * FROM Curso WHERE id_curso = ?";
  conexao.query(sql, [idCurso], callback);
}

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
