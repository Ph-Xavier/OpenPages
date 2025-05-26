let mysql = require("mysql2");
let database = "openPages";

let conexao = mysql.createConnection({
  user: "root",
  password: "fatec123*",
  host: "localhost",
  port: 3306,
});

conexao.connect((err) => {
  if (err) {
    console.log("Erro ao conectar no MYSQL...", err);
    return;
  } else {
    conexao.query("USE " + database);
    console.log("\nConexão estabilizada com sucesso!!!");
  }
});

module.exports = conexao;
