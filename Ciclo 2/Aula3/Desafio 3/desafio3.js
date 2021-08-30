  
	window.onload = function(){

	const valor1 = document.querySelector("#v1");
	const valor2 = document.querySelector("#v2");
	const valor3 = document.querySelector("#s");
	const btnRes = document.querySelector("#btn");

		btnRes.addEventListener('click',()=>{

			var cx1 = valor1.value;
			var cx2 = valor2.value;
			var vs =  valor3.value;
			var r = Number(cx1)+Number(cx2); 
			console.log(vs);
			console.log(r);
			
			if(vs==r){
				alert ("Sua soma está correta!")
			} else { 
				alert ("Sua soma não está correta!")
			}
		});

	}