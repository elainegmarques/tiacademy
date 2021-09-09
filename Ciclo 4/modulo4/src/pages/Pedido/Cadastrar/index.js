import axios from "axios";
import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development";
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap"
import { api } from "../../../config";

export const CadastrarPedido = () => {

    const [pedido, setPedido] = useState({
        nome: '',
        descricao: ''
    });

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const valorInput = e => setPedido({
        ...pedido, [e.target.name]: e.target.value
    });

    const cadPedido = async e => {
        e.preventDefault();

        setStatus({
            formSave: true
        });

        const headers = {
            'Content-type': 'application/json'
        };

        await axios.post(api + "/pedidos", pedido, { headers })
            .then((response) => {
                if (response.data.error) {
                    setStatus({
                        formSave: false,
                        type: 'error',
                        message: response.data.message
                    });
                } else {
                    setStatus({
                        formSave: false,
                        type: 'success',
                        message: response.data.message
                    });
                }
            })
            .catch(() => {
                setStatus({
                    formSave: false,
                    type: 'error',
                    message: "Erro: Não foi possível conectar a API"
                })
            });
    };

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h3>Cadastrar Pedido</h3>
                    </div>

                    <div className="p-2">
                        <Link to="/visualizarpedido"
                            className="btn btn-outline-primary btn-sm">Listar</Link>
                    </div>
                </div>
                <hr className="m-1" />

                {status.type === 'error' ? <Alert color="danger">
                    {status.message} </Alert> : ""}

                {status.type === 'success' ? <Alert color="success">
                    {status.message} </Alert> : ""}

                <Form className="p-2" onSubmit={cadPedido}>
                    <FormGroup className="p-2">
                        <Label>ID do Cliente</Label>
                        <Input type="text" name="ClienteId" placeholder="ID do cliente" onChange={valorInput}></Input>
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>ID do Serviço</Label>
                        <Input type="text" name="ServicoId" placeholder="ID do serviço" onChange={valorInput}></Input>
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Valor</Label>
                        <Input type="text" name="valor" placeholder="Valor" onChange={valorInput}></Input>
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Data</Label>
                        <Input type="text" name="data" placeholder="Data" onChange={valorInput}></Input>
                    </FormGroup>

                    {status.formSave ?
                        <Button type="submit" outline color="info" disabled>Salvando...
                            <Spinner size="sm" color="info" /></Button> :
                        <Button className="d-flex m-2" type="submit" color="primary">Cadastrar</Button>}
                        <Button className="d-flex m-2" type="reset" color="secondary">Limpar Formulário</Button>
                </Form>
            </Container>
        </div>
    )
};