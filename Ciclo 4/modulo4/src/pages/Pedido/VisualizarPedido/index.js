import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap"
import { api } from '../../../config';

export const VisualizarPedido = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const getPedidos = async () => {
        await axios.get(api + "/listapedidos")
            .then((response) => {
                console.log(response.data.pedidos);
                setData(response.data.pedidos);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar a API'
                })
            });
    }

    const apagarPedido = async(idPedido)=>{
        console.log(idPedido);

        const headers={
            'Content-Type':'application/json'
        }

        await axios.delete(api+"/apagarpedido/"+idPedido,{headers})
        .then((response)=>{
            console.log(response.data.error);
            getPedidos();
        })
        .catch(()=>{
            setStatus({
                type:'error',
                message:'Erro: Não foi possível acessar a API.'
            });
        });
    }

    useEffect(() => {
        getPedidos();
    }, []);

    return (
        <div className="p-3">
            <Container>
            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h3>Informações do Pedido</h3>
                    </div>
                    <div className="p-2">
                        <Link to="/cadastrarpedido"
                            className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ID do Cliente</th>
                            <th>ID do Servico</th>
                            <th>Valor</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.ClienteId}</td>
                                <td>{item.ServicoId}</td>
                                <td>{item.valor}</td>
                                <td>{item.data}</td>
                                <td className="text-center">
                                <Link to={"/pedido/"+item.id}
                                    className="btn btn-outline-primary btn-sm">Consultar</Link> 
                                <Link to={"/editarpedido/" + item.id}
                                     className="btn btn-outline-secondary btn-sm m-1">Editar</Link>
                                <span className="btn btn-outline-danger btn-sm m-1"
                                     onClick={()=>apagarPedido(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}