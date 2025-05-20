// tipos de dados
//todos são primitivos exceto os objetos.
var nome = "André"; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object
// primitivos são dados imutáveis

//var nome = 'André';
//console.log(typeof nome);
// retorna string

var nome = "André";
var sobrenome = "Jorge";
console.log(nome + "" + sobrenome);

//var gols = 1000;
//var frase = "Romário fez" + gols + "gols";
//console.log(typeof frase);

var ano = "2025";
var mes = 5;
console.log(ano + mes);

('JavaScript é "super" fácil');
("JavaScript é 'super' fácil");
('JavaScript é "super" fácil');
`JavaScript é "super" fácil"`;
//"JavaScript é "super" fácil"; // Inválido

var gols = 1000;
var frase1 = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols * 2} gols`;

console.log(frase2);

// Declare uma variável contendo uma string
var carro = "porche";
// Declare uma variável contendo um número dentro de uma string
var mes = "30";
// Declare uma variável com a sua idade
var idade = 22;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = "André";
var sobrenome = "Jorge";
var nomeCompleto = `${nome} ${sobrenome}`;
// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time";
// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);
