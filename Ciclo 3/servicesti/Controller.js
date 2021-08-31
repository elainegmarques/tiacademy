const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.post('/servicos',async(req,res)=>{
    let create=await servico.create(
         req.body
    );
    res.send('Serviço foi inserido!');
});

//DesafioAula3:
app.post('/clientes',async(req,res)=>{
    let create=await cliente.create(
        req.body
        );
    res.send('Cliente foi inserido!');
});

//DesafioAula3:
app.post('/pedidos',async(req,res)=>{
    let create=await pedido.create(
        req.body
        );
    res.send('Pedido foi inserido!');
});

app.get('/', function(req,res){
    res.send('Olá Mundo!');
});

app.get('/Listacliente', function(req,res){
    res.send('Lista de clientes!');
});

app.get('/Listapedido', function(req,res){
    res.send('Lista de pedidos!');
});

app.get('/Listaservico', function(req,res){
    res.send('Lista de serviços!');
});

app.get('/listaservicos', async(req,res)=>{
    await servico.findAll({
     //   raw:true
        order: [['nome','DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/ofertas', async(req,res)=>{
    await servico.count('id')
    .then(function(servicos){
        res.json(servicos);
    });
});

app.get('/servico/:id', async(req,res)=>{
    servico.findByPk(req.params.id)
    .then(servico =>{
        return res.json({
            error: false,
            servico
        });
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message: "Código não cadastrado!"
        });
    });
});

//ex1:
app.get('/listaclientes', async(req,res)=>{
    await cliente.findAll({
        raw:true
    }).then(function(clientes){
        res.json({clientes})
    });
}); 

//ex2:
app.get('/clientesantq', async(req,res)=>{
    await cliente.findAll({
        order: [['createdAt']]
    }).then(function(clientes){
        res.json({clientes})
    });
});

//ex3:
app.get('/listapedidos', async(req,res)=>{
    await pedido.findAll({
        raw:true
    }).then(function(pedidos){
        res.json({pedidos})
    });
}); 

//ex4:
app.get('/listavalor', async(req,res)=>{
    await pedido.findAll({  
        order: [['valor','DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });
}); 


//ex5:
app.get('/qtdclientes', async(req,res)=>{
    await cliente.count('id')
    .then(function(clientes){
        res.json(clientes);
    });
});

//ex6:
app.get('/qtdpedidos', async(req,res)=>{
    await pedido.count('id')
    .then(function(pedidos){
        res.json(pedidos);
    });
});

//DesafioAula4:
app.get('/valorpedidos/:id', async(req,res)=>{
    await pedido.sum('valor', { where: { ClienteId:(req.params.id)} 
    }).then(function(pedidos){
        res.json(pedidos);
    });
});

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});