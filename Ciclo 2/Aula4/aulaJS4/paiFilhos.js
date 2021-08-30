window.onload = function(){


    const pai = document.querySelectorAll("#pai");
    pai.forEach((pegarFilhos)=>{

        pegarFilhos.addEventListener('click',(filho)=>{

            alert(filho.target.textContent);

        });
    });
 
    const btn = document.querySelector("#btn");
    const outroPai = document.querySelector('#outroPai');
    var i = 0;
    btn.addEventListener('click',()=>{

        let lista = ["Banana", "Uva", "Pera", "Manga"];

        li = document.createElement("li");
        
      
        outroPai.appendChild(li).textContent=lista[i];
        li.setAttribute("class", "itemL");
        i++;
    });


    const paiDaLista = document.querySelectorAll("#outroPai");
    paiDaLista.forEach(listaDeFilhos=>{
        // "penerar" os "filhos"
        listaDeFilhos.addEventListener("click",(filhos)=>{
            alert(filhos.target.textContent);
        });
    });

}