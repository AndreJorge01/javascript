//Numeros
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
// Precisão até 15 digitos

//Operadores Aritméticos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
//Lembrando que soma + em Strings serve para concatenar

//Operadores Aritméticos (Strings)
var soma = "100" + 50; // 10050
var subtracao = "100" - 50; // 50
var multiplicacao = "100" * "2"; // 200
var divisao = "Comprei 10" / 2; // NaN (Not a Number)
//É possível verificar se uma variável é NaN ou não com a função isNaN()

//NaN = Not a Number
var numero = 80;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

//A ordem importa
//Começa por multiplicação e divisão, depois por soma e subtração.
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

//Operadores Aritméticos Unários
var incremento = 5;
//console.log(incremento++); // 5
//console.log(incremento); // 6

var incremento2 = 5;
//console.log(++incremento2); // 6
//console.log(incremento2); // 6
//Mesma coisa para o decremento --x

//Operadores Aritméticos Unários
//O + e - tenta transformar o valor seguinte em número
var frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN

var idade = "28";
+idade; // 28 (número)
-idade; // -28 (número)
//console.log(+idade + 5); // 33

var possuiFaculdade = true;
//console.log(+possuiFaculdade); // 1
//O - antes de um número torna ele negativo

// Qual o resultado da seguinte expressão?
var total1 = 10 + (5 * 2) / 2 + 20;
console.log(total1);

// Crie duas expressões que retornem NaN
var peso = "peso 80" / 3;
var somarPeso = peso + 5;
console.log(peso);
console.log(somarPeso);
// Somar a string '200' com o número 50 e retornar 250
var somarString = +"200" + 50;
console.log(somarString);
// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
var incrementado = ++incremento;
console.log(++incremento);

// Como dividir o peso por 2?
var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
//var pesoPorDois = peso / 2; // NaN (Not a Number)
console.log(peso);
