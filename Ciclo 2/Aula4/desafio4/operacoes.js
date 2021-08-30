window.onload = function () {
   
//produtos   

    (() => {
        let mostrarProdutoCliente = document.querySelector("#content-produtos > ul#produtos");
        for (let idx in produtos) {
            mostrarProdutoCliente.innerHTML += `<li class = "itemProduto" data-preco=${produtos[idx].prodPreco}> ${produtos[idx].prodDesc} </li> `;
        }
        console.log(mostrarProdutoCliente);
    })(produtos);

// compras

    const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");
    const cestaDoCliente = document.querySelector("ul#cestaDoCliente");
    const mostraTotalCompra = document.querySelector("#mostraTotalCompra");
    const armazenaItens = [];
    var totalPedido = 0;



    console.log(itemProduto);

    itemProduto.forEach((item) => {
       
        item.addEventListener('click', () => {


            if (armazenaItens.indexOf(item.textContent) == -1) {

                li = document.createElement("li");
                li.setAttribute("class", "itemProduto");
                li.setAttribute("data-preco", item.dataset.preco);

                armazenaItens.push(item.textContent);
                cestaDoCliente.appendChild(li).textContent = item.textContent;
                totalPedido += Number(item.dataset.preco);
                mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            } else {
                alert(`Este item ${item.textContent} já esta na sua cesta!`);
            }
        });
    });

//Removendo Item

    const removeItem = document.querySelectorAll("#cestaDoCliente");
    const remove = document.querySelector("ul#cestaDoCliente");

    removeItem.forEach((item) => {

        item.addEventListener('click', (itemRemovido) => {

            var idx = armazenaItens.indexOf(itemRemovido.target.textContent);
            if (idx > -1) {
                cestaDoCliente.removeChild(remove.childNodes[idx]);
                armazenaItens.splice(idx, 1);
                totalPedido -= Number(itemRemovido.target.dataset.preco);
                mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', 
                    { style: 'currency', currency: 'BRL' });
            }
        });
    });

};