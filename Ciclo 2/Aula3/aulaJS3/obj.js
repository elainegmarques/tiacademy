  
/* objetos */

function Pessoa(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
}

var ps1 = new Pessoa("Tony", "Stark", 40); // construtor
console.log("Pessoa 1 - Nome: " + ps1.nome + " "+ps1.sobrenome+ " idade: " + ps1.idade);

var ps2 = new Pessoa("Steve");

console.log("Peossoa 2 - Nome: " + ps2.nome+" "+ ps2.sobrenome);

var objPessoa = { rg: "7767", cpf: "01565"};

//console.log(typeof(objPessoa));
console.log ("RG: "+ objPessoa.rg);

function Pessoa2(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg:'777',
		cpf:'4465'
		}
	}

	var pessoa2 = new Pessoa2("Thor");
	console.log("Nome: "+pessoa2.nome+" "+"Rg: "+pessoa2.doc.rg);
	console.log(`Nome: ${pessoa2.nome} - Rg: ${pessoa2.doc.rg}`);
