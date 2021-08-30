window.onload = function(){

//produtos

(()=>{

    let mostrarProdutosCliente = document.querySelector('#content-produtos > ul#produtos');

    for (let idx in produtos){

        mostrarProdutosCliente.innerHTML += `<li class=itemProduto data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}</li>`
    }

})(produtos)

//compra

const itemProduto = document.querySelectorAll('#produtos > li.itemProduto');

const cestaDoCliente = document.querySelector('ul#cestaDoCliente');

const mostraTotalCompra = document.querySelector('#mostraTotalCompra');

const armazenaItens=[];

var totalPedido =0;

itemProduto.forEach((item)=>{

    item.addEventListener('click', ()=>{

        if(armazenaItens.indexOf(item.textContent) == -1){

        li=document.createElement('li');
        li.setAttribute("class", "itemProduto");
        li.setAttribute("data-preco", item.dataset.preco);

       
            armazenaItens.push(item.textContent);

            cestaDoCliente.appendChild(li).textContent = item.textContent;

            totalPedido += Number(item.dataset.preco);

            mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR',

                {style: 'currency', currency: 'BRL'}
                )

        } else{
            alert(`Este item ${item.textContent} já está na sua cesta.`);
        }
        console.log(li);
    })
})



}//fim