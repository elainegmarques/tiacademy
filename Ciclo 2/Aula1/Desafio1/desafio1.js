var nome = prompt("Digite seu nome:");

var numero = prompt(nome + ", escolha um número por favor:")

numero = parseInt(numero);

var v = (numero == numero);
console.log (v);

var s = (numero + numero);
console.log (s);

var m = (numero - numero);
console.log (m);

var r = (numero % numero);
console.log (r);

var q = (numero * numero);
console.log (q);

document.write("1.Seja bem vindo..: " + nome +"<br>");
document.write("2.Você digitou o número..: (" + numero + ")" + "<br>");
document.write("3.O retorno da comparação booleana é..: " + v + "<br>");
document.write("4.A soma dos valores é..: " + s + "<br>");
document.write("5.A subtração dos valores é..: " + m + "<br>");
document.write("6.O resto da divisão é de..: " + r + "<br>");
document.write("7.O quadrado do número é..: " + q);