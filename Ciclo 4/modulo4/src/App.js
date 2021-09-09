import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/'; 
import {Menu} from './components/Menu';
import { VisualizarServico } from './pages/Servico/VisualizarServico';
import { Servico } from './pages/Servico/Servico';
import { VisualizarCliente } from './pages/Cliente/VisualizarCliente';
import { Cliente } from './pages/Cliente/Cliente';
import { VisualizarPedido } from './pages/Pedido/VisualizarPedido';
import { Cadastrar } from './pages/Servico/Cadastrar';
import { Pedido } from './pages/Pedido/Pedido';
import { CadastrarCliente } from './pages/Cliente/Cadastrar';
import { CadastrarPedido } from './pages/Pedido/Cadastrar';
import { Editar } from './pages/Servico/Editar';
import { EditarCliente } from './pages/Cliente/Editar';
import { EditarPedido } from './pages/Pedido/Editar';

function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Visualizarservico" component={VisualizarServico}/>
          <Route path="/servico/:id" component={Servico}/>
          <Route path="/cadastrarservico" component={Cadastrar}/>
          <Route path="/editarservico/:id" component={Editar}/>
          <Route path="/Visualizarcliente" component={VisualizarCliente}/>
          <Route path="/cliente/:id" component={Cliente}/>
          <Route path="/cadastrarcliente" component={CadastrarCliente}/>
          <Route path="/editarcliente/:id" component={EditarCliente}/>
          <Route path="/Visualizarpedido" component={VisualizarPedido}/>
          <Route path="/pedido/:id" component={Pedido}/>
          <Route path="/cadastrarpedido" component={CadastrarPedido}/>
          <Route path="/editarpedido/:id" component={EditarPedido}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
