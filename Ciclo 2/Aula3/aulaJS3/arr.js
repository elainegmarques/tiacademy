/* Concat() Junta os elementos de dois ou mais arrays e retorna uma cópia com os elementos juntos*/ 

var frutas = ["Uva", "Banana", "Amora", "Melão"]; // var frutas = Array();
console.log(`Qtd do array: ${frutas.length} fruta: ${frutas[0]}`);

var frutas2 = ["Maça", "Pera", "Laranja"];

var todasAsFrutas = frutas.concat(frutas2);
console.log(frutas);
console.log(todasAsFrutas);

/* IndexOf procura um elemento especifico no array e retorna a sua posição*/
var retornoIndexOf= todasAsFrutas.indexOf("Amora");
console.log(retornoIndexOf);//2

/*array associativo: indexização por string,não é possivel no JS
var arrass = ["nome" =>"Elaine"]
arrass["nome"];*/
/* join - transforma um array em string*/

var stringDeArray = todasAsFrutas.join();
console.log(stringDeArray)

/*push* insere um novo elemento no final da lista*/

var outraLista = ["Bola", "Peteca"];
var novaLista = outraLista.push("Boneca","Qualquer brinquedo");

console.log(novaLista);
console.log(outraLista);
console.log(outraLista[3]);

/*pop - remove o ultimo item da lista*/

console.log(outraLista.pop());
console.log(outraLista);

/*reverse - inverte a lista*/

console.log(outraLista.reverse());
/*
shift - remove o primeiro elemento do array*/
var removerPrimeiro = ["fusca","variante"];
removerPrimeiro.shift();
console.log(removerPrimeiro);
/*
sort - ordena elementos do array*/

var alfa = [4,6,9,2];
alfa.sort();
console.log(alfa);


/*toString conver um array em string e retorna a string - igual o join*/

/*unshift - insere novo elemento no inicio do ArrayBuffer*/

alfa.unshift(10);
console.log(alfa);

/*splice - corta o array em um ponto*/

var f = ["Uva", "Banana", "Amora", "Melão"]; 
//console.log(f.splice(2, 1));

/*indexOf retorna o indice de um array*/
var idx= f.indexOf("Banana");
console.log(idx);
console.log(f.splice(idx, 2));
console.log(f);

//var r= f.splice();
//console.log(r);

//arrays de objetos

var dados = [
			{nome:"Elaine"}, //0
			{nome: "Marcelo"} //1
			]

//console.log(dados[0].nome)
//onsole.log(dados[1].nome)

function Pessoa2(nome, sobrenome, idade, doc=[]){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg:doc[0],
		cpf:doc[1]
		}
	}

	var pessoa2= new Pessoa2("Thor","","",['22','555']);
	
	//console.log("Nome: "+pessoa2.nome+" "+pessoa2.doc.rg);
	console.log(`Nome ${pessoa2.nome} - cpf: ${pessoa2.doc.cpf}`);








