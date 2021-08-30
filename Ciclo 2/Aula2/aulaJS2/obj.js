/*
 var / let const

*/
/*var nome="Elaine"; //variavel global
let sobrenome = "Marques";
if(true){
	console.log("var nome="+nome);
	var nm = nome;
	console.log("Chamando o sobrenome "+ sobrenome);
	let sn = "Da Silva";
	console.log(sobrenome);
}

console.log("Meu nome é "+nm+" "+sobrenome+" "+sn);
console.log("var nome="+nm);

*/

var Pessoa = {
		nome: "Elaine",
		rua: "Rua lá",
		ncasa: "777",
		dados: function(){
			document.write(
				"Nome...:"+this.nome+"<br>"+
				"Rua...:"+this.rua+"<br>"+
				"N. casa...:"+this.ncasa+"<br>") 
		}
}
Pessoa.dados();
console.log("Nome"+Pessoa.nome+
			"Endereço"+Pessoa.rua+"N."+Pessoa.ncasa);