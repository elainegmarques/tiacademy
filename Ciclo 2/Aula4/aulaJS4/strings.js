/*var nome="Elaine";
console.log(nome.length);
console.log(nome[0]); // E*/



// match() : procura uma palavra em uma string

//var palavras = "Maça doce";

//console.log( palavras.match(/D/gi));

//search(): procura pela ocorrência e retona a pos~ição na cadeia da string, a posição é em relação ao primeiro caracter da ocorrência.

//console.log( palavras.search(/d/gi));

//replace(): substitui uma string por outra.

/*var str = "Lorem ipsum dolor sit amet, . " + "Distinctio, totam, odit.";
var mudaStr = str.replace(/odit/gi,'Xxxxx');
console.log(mudaStr);
*/

//localeCompare(): comparação entre duas strings. Se for igual retorna 0. se nao forem -1 e 1 é esperado

/*var comp1 = "Comparar";
var comp2 = "comparar";
var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase(); 
//console.log(`Este é o c1: ${c1} Este é o c2: ${c2}`)
var comparacao = c1.localeCompare(c2);
console.log(comparacao);*/

//trim(): remove espaços da esquerda e direita da string, sem ser no JS tira tbm caracteres. 

var p = '  fpalavra+';

var r = p.trim();
console.log(r);
var s=r.replace(/f/gi,'');
console.log(s);
sub_a = s.replace('+',''); // remover e substituir o sinal de +
console.log(`Removido: ${sub_a}`);

//toLocaleString: pega um valor que represente uma moeda e formata em reais. 

var valor = 1.35 // 1,35;
var formatarMoeda = valor.toLocaleString('pt-BR', {
	style: 'currency',
	currency:'BRL'
})
console.log(formatarMoeda);