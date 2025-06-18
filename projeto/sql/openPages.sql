CREATE DATABASE openPages;
USE openPages;

CREATE TABLE Curso (
    id_curso VARCHAR(5),
    nome_curso VARCHAR(100),
    descricao TEXT,
    CONSTRAINT pk_curso PRIMARY KEY (id_curso)
);

CREATE TABLE Livro (
    id_livro INT AUTO_INCREMENT,
    titulo VARCHAR(100),
    autor VARCHAR(100),
    editora VARCHAR(50),
    edicao VARCHAR(20),
    materia VARCHAR(50),
    palavras_chave VARCHAR(250),
    id_curso VARCHAR(5),
    disponibilidade BOOLEAN DEFAULT true,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_livro PRIMARY KEY (id_livro),
    CONSTRAINT fk_livro_curso FOREIGN KEY (id_curso) REFERENCES Curso(id_curso)
);

CREATE TABLE SugestaoDeLivro (
    id_sugestao INT AUTO_INCREMENT,
    livro_sugerido VARCHAR(100),
    autor VARCHAR(100),
    editora VARCHAR(50),
    id_curso VARCHAR(5),
    motivo TEXT,
    data_sugestao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status_sugestao ENUM('pendente', 'aprovada', 'rejeitada') DEFAULT 'pendente',
    CONSTRAINT pk_sugestao PRIMARY KEY (id_sugestao),
    CONSTRAINT fk_sugestao_curso FOREIGN KEY (id_curso) REFERENCES Curso(id_curso)
);

select * from SugestaoDeLivro;

INSERT INTO Curso (id_curso, nome_curso, descricao) VALUES
('DSM', 'Desenvolvimento de Software Multiplataforma', 'Curso focado em desenvolvimento de software para diferentes plataformas'),
('ADS', 'Análise e Desenvolvimento de Sistemas', 'Curso de análise e desenvolvimento de sistemas de informação'),
('GPI', 'Gestão da Produção Industrial', 'Curso voltado para gestão e otimização de processos industriais'),
('GRH', 'Gestão de Recursos Humanos', 'Curso focado em gestão de pessoas e recursos humanos');

INSERT INTO Livro (titulo, autor, editora, edicao, id_curso, disponibilidade) VALUES
# Livros de DSM
('Clean Code', 'Robert C. Martin', 'Prentice Hall', '1ª Edição','DSM', true),
('JavaScript: O Guia Definitivo', 'David Flanagan', 'O''Reilly', '6ª Edição','DSM', true),
('React: Up & Running', 'Stoyan Stefanov', 'O''Reilly', '2ª Edição', 'DSM', true),
('Python Fluente', 'Luciano Ramalho', 'O''Reilly', '2ª Edição','DSM', false),
('Node.js in Action', 'Mike Cantelon', 'Manning', '2ª Edição', 'DSM', true),
('Flutter na Prática', 'Frank Zammetti', 'Novatec', '1ª Edição', 'DSM', true),
('Kotlin em Ação', 'Dmitry Jemerov', 'Novatec', '1ª Edição', 'DSM', true),
('Swift Programming', 'Apple Education', 'Apple Books', '2ª Edição', 'DSM', true),
('React Native', 'Bonnie Eisenman', 'O''Reilly', '3ª Edição', 'DSM', true),
('Progressive Web Apps', 'Alex Russell', 'Manning', '1ª Edição', 'DSM', true),
('Docker: Up & Running', 'Sean P. Kane', 'O''Reilly', '3ª Edição', 'DSM', true),
('TypeScript Handbook', 'Microsoft', 'Microsoft Press', '2ª Edição', 'DSM', true),
('Vue.js: Up and Running', 'Callum Macrae', 'O''Reilly', '1ª Edição', 'DSM', true),
('Angular in Action', 'Jeremy Wilken', 'Manning', '2ª Edição', 'DSM', true),
('MongoDB: The Definitive Guide', 'Shannon Bradshaw', 'O''Reilly', '3ª Edição', 'DSM', true),
('AWS em Ação', 'Andreas Wittig', 'Novatec', '2ª Edição', 'DSM', true),
('Design de APIs REST', 'Mark Masse', 'Casa do Código', '1ª Edição', 'DSM', true),
('Microsserviços Prontos Para Produção', 'Susan J. Fowler', 'Novatec', '1ª Edição', 'DSM', true),
('GraphQL: Uma Abordagem Prática', 'Eve Porcello', 'O''Reilly', '1ª Edição', 'DSM', true),
('Desenvolvimento Mobile Multiplataforma', 'Tony Gaddis', 'Pearson', '1ª Edição', 'DSM', true),
('Programação Funcional', 'Luis Atencio', 'Manning', '1ª Edição', 'DSM', true),
('Segurança em Aplicações Web', 'Mike Shema', 'Novatec', '2ª Edição', 'DSM', true),
('DevOps na Prática', 'Danilo Sato', 'Casa do Código', '1ª Edição', 'DSM', true),
('TDD com JavaScript', 'Lucas da Costa', 'O''Reilly', '1ª Edição', 'DSM', true),

# Livros de ADS
('Engenharia de Software', 'Ian Sommerville', 'Pearson', '10ª Edição', 'ADS', true),
('Padrões de Projetos', 'Erich Gamma', 'Bookman', '2ª Edição', 'ADS', true),
('UML 2.5', 'Carlos Henrique Cantu', 'Novatec', '3ª Edição', 'ADS', true),
('Refatoração', 'Martin Fowler', 'Bookman', '2ª Edição', 'ADS', true),
('Domain-Driven Design', 'Eric Evans', 'Alta Books', '1ª Edição', 'ADS', true),
('Algoritmos: Teoria e Prática', 'Thomas H. Cormen', 'Campus', '3ª Edição', 'ADS', true),
('Arquitetura Limpa', 'Robert C. Martin', 'Alta Books', '1ª Edição', 'ADS', true),
('Banco de Dados', 'Abraham Silberschatz', 'Campus', '6ª Edição', 'ADS', true),
('Estruturas de Dados e Algoritmos em Java', 'Robert Lafore', 'Ciência Moderna', '2ª Edição', 'ADS', true),
('Extreme Programming', 'Kent Beck', 'Bookman', '2ª Edição', 'ADS', true),
('Métricas Ágeis', 'Raphael Albino', 'Casa do Código', '1ª Edição', 'ADS', true),
('Redes de Computadores', 'Andrew S. Tanenbaum', 'Pearson', '5ª Edição', 'ADS', true),
('Sistemas Operacionais Modernos', 'Andrew S. Tanenbaum', 'Pearson', '4ª Edição', 'ADS', true),
('Test-Driven Development', 'Kent Beck', 'Bookman', '1ª Edição', 'ADS', true),
('UML 2.5 na Prática', 'Pascal Roques', 'Ciência Moderna', '1ª Edição', 'ADS', true),
('Programação Orientada a Objetos', 'Robert C. Martin', 'Alta Books', '1ª Edição', 'ADS', true),
('Segurança da Informação', 'William Stallings', 'Pearson', '2ª Edição', 'ADS', true),
('Computação em Nuvem', 'Thomas Erl', 'Pearson', '1ª Edição', 'ADS', true),
('Qualidade de Software', 'Daniel Galin', 'Novatec', '1ª Edição', 'ADS', true),
('Gerenciamento de Projetos de Software', 'Bob Hughes', 'Bookman', '3ª Edição', 'ADS', true),
('Modelagem de Dados', 'Steve Hoberman', 'Alta Books', '1ª Edição', 'ADS', true),
('Inteligência Artificial', 'Stuart Russell', 'Campus', '3ª Edição', 'ADS', true),
('Arquitetura de Software', 'Neal Ford', 'O''Reilly', '1ª Edição', 'ADS', true),

# Livros de GPI
('Administração da Produção', 'Nigel Slack', 'Atlas', '8ª Edição', 'GPI', true),
('Gestão da Qualidade Total', 'Vicente Falconi', 'INDG', '3ª Edição', 'GPI', true),
('Logística Empresarial', 'Ronald H. Ballou', 'Bookman', '5ª Edição', 'GPI', false),
('Gestão de Operações', 'David Slack', 'Atlas', '8ª Edição', 'GPI', true),
('Planejamento e Controle da Produção', 'Henrique Corrêa', 'Atlas', '5ª Edição', 'GPI', true),
('Administração da Produção e Operações', 'Daniel Reid', 'LTC', '3ª Edição', 'GPI', true),
('Gestão da Cadeia de Suprimentos', 'Sunil Chopra', 'Pearson', '4ª Edição', 'GPI', true),
('Lean Manufacturing', 'Jeffrey K. Liker', 'Bookman', '2ª Edição', 'GPI', true),
('Gestão da Qualidade Total', 'Joseph M. Juran', 'Makron Books', '3ª Edição', 'GPI', true),
('Ergonomia', 'Itiro Iida', 'Edgard Blucher', '3ª Edição', 'GPI', true),
('Gestão de Projetos Industriais', 'Pedro Paulo Carbone', 'FGV', '1ª Edição', 'GPI', true),
('Planejamento Estratégico Industrial', 'Djalma P. Rebouças', 'Atlas', '2ª Edição', 'GPI', true),
('Automação Industrial', 'João Mamede Filho', 'LTC', '2ª Edição', 'GPI', true),
('Segurança do Trabalho', 'Antonio Waldimir Leopoldino', 'Atlas', '3ª Edição', 'GPI', true),
('Gestão Ambiental na Indústria', 'José Carlos Barbieri', 'Saraiva', '2ª Edição', 'GPI', true),
('Manutenção Industrial', 'Alan Kardec', 'Qualitymark', '4ª Edição', 'GPI', true),
('Logística Industrial', 'Paulo Roberto Bertaglia', 'Saraiva', '2ª Edição', 'GPI', true),
('Gestão de Custos', 'Eliseu Martins', 'Atlas', '10ª Edição', 'GPI', true),
('Indústria 4.0', 'Klaus Schwab', 'Atlas', '1ª Edição', 'GPI', true),
('Sistema Toyota de Produção', 'Taiichi Ohno', 'Bookman', '1ª Edição', 'GPI', true),
('Pesquisa Operacional', 'Marco Goldbarg', 'Campus', '2ª Edição', 'GPI', true),
('Gestão de Estoques', 'Antonio Novaes', 'Atlas', '4ª Edição', 'GPI', true),
('Controle Estatístico de Processos', 'Donald J. Wheeler', 'Bookman', '2ª Edição', 'GPI', true),

# Livros de GRH
('Gestão de Pessoas', 'Idalberto Chiavenato', 'Manole', '4ª Edição', 'GRH', true),
('Comportamento Organizacional', 'Stephen P. Robbins', 'Pearson', '14ª Edição', 'GRH', true),
('Psicologia nas Organizações', 'Jose Carlos Zanelli', 'Artmed', '5ª Edição', 'GRH', false),
('Gestão por Competências', 'Joel Souza Dutra', 'Gente', '2ª Edição', 'GRH', true),
('Recrutamento e Seleção', 'Regina Lucia de Oliveira', 'Atlas', '3ª Edição', 'GRH', true),
('Treinamento e Desenvolvimento', 'Marisa Eboli', 'Atlas', '2ª Edição', 'GRH', true),
('Cultura Organizacional', 'Edgar H. Schein', 'Atlas', '5ª Edição', 'GRH', true),
('Avaliação de Desempenho', 'Antonio Carlos Gil', 'Atlas', '2ª Edição', 'GRH', true),
('Gestão de Carreiras', 'Joel Souza Dutra', 'Atlas', '1ª Edição', 'GRH', true),
('Remuneração e Benefícios', 'Jean Pierre Marras', 'Pearson', '3ª Edição', 'GRH', true),
('Direito do Trabalho', 'Mauricio Godinho Delgado', 'LTr', '19ª Edição', 'GRH', true),
('Comunicação Empresarial', 'Maria Alzira Pimenta', 'Alínea', '7ª Edição', 'GRH', true),
('Qualidade de Vida no Trabalho', 'Ana Cristina Limongi-França', 'Atlas', '4ª Edição', 'GRH', true),
('Gestão de Conflitos', 'William Ury', 'Manole', '2ª Edição', 'GRH', true),
('Liderança e Gestão de Equipes', 'Paulo Roberto Motta', 'FGV', '3ª Edição', 'GRH', true),
('Coaching e Mentoring', 'John Whitmore', 'Qualitymark', '2ª Edição', 'GRH', true),
('Gestão da Mudança', 'John P. Kotter', 'Best Seller', '2ª Edição', 'GRH', true),
('Clima Organizacional', 'Roberto Coda', 'Atlas', '1ª Edição', 'GRH', true),
('E-Social na Prática', 'Zenaide Carvalho', 'IOB', '2ª Edição', 'GRH', true),
('Indicadores de RH', 'José Luiz Bichuetti', 'Qualitymark', '1ª Edição', 'GRH', true),
('Diversidade e Inclusão', 'Maria Tereza Leme Fleury', 'Atlas', '1ª Edição', 'GRH', true),
('Gestão do Conhecimento', 'Ikujiro Nonaka', 'Bookman', '2ª Edição', 'GRH', true),
('Planejamento Estratégico de RH', 'Benedito Rodrigues Pontes', 'LTr', '2ª Edição', 'GRH', true);


SELECT titulo, autor, edicao, editora
FROM Livro 
WHERE id_curso = 'DSM' AND disponibilidade = true
ORDER BY titulo;

SELECT titulo, autor, id_curso, disponibilidade
FROM Livro
WHERE titulo LIKE '%JavaScript%' 
OR autor LIKE '%JavaScript%'
OR palavras_chave LIKE '%JavaScript%';

SELECT c.nome_curso, COUNT(l.id_livro) as total_livros,
       SUM(CASE WHEN l.disponibilidade = true THEN 1 ELSE 0 END) as livros_disponiveis
FROM Curso c
LEFT JOIN Livro l ON c.id_curso = l.id_curso
GROUP BY c.id_curso, c.nome_curso;

UPDATE Livro 
SET disponibilidade = false
WHERE id_livro = 1;

INSERT INTO SugestaoDeLivro (livro_sugerido, autor, editora, id_curso, motivo) VALUES 
('Design Patterns', 'Gang of Four', 'Addison-Wesley', 'DSM', 'Livro fundamental para padrões de projeto em programação orientada a objetos');

SELECT s.*, c.nome_curso
FROM SugestaoDeLivro s
JOIN Curso c ON s.id_curso = c.id_curso
WHERE status_sugestao = 'pendente'
ORDER BY data_sugestao DESC;
