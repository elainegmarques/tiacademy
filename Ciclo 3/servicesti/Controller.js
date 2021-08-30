const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.get('/', function(req,res){
    res.send('Olá Mundo!');
});

app.get('/clientes', async(req,res)=>{
    let create=await cliente.create({
        nome: "Elaine Marques",
        endereco: "Rua cinco, 757",
        cidade: "Maringá",
        uf: "PR",
        nascimento: "1989-02-15"
    });
        res.send("Clientes foi inserido!");
});

app.get('/clientes01', function(req,res){
    res.send('Lista de cliente');
});

app.get('/servicos01', function(req,res){
    res.send('Servico solicitado');
});

app.get('/pedidos01', function(req,res){
    res.send('Pedido efetuado');
});

app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
       req.body
    );
        res.send("Serviço foi inserido!");
});

app.post('/clientes', async(req,res)=>{
    let create=await cliente.create(
        req.body
    );
        res.send("Cliente foi inserido!");
});

app.post('/pedidos', async(req,res)=>{
    let create=await pedido.create(
        req.body
    );
        res.send("Pedido foi inserido!");
});

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});