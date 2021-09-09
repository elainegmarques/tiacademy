import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { api } from '../../../config';

export const EditarCliente = (props) => {

    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [nascimento, setNascimento] = useState('');

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const edtCliente = async e => {
        e.preventDefault();
        console.log("Editar")

        setStatus({
            formSave:true
        });

        const headers ={
            'Content-Type':'application/json'
        }

        await axios.put(api+"/editarcliente",{id,nome,endereco,cidade,uf,nascimento},{headers})
        .then((response)=>{
            console.log(response.data.error);
            console.log(response.data.message);
            setStatus({
                formSave:false
            });
        })
        .catch(()=>{
            setStatus({
                formSave:false,
                type:'error',
                message:"Erro: Não foi possível acessar a API."
            });
        });
    };

    useEffect(() => {
        const getCliente = async () => {
            await axios.get(api + "/cliente/" + id)
                .then((response) => {
                    setNome(response.data.cliente.nome);
                    setEndereco(response.data.cliente.endereco);
                    setCidade(response.data.cliente.cidade);
                    setUf(response.data.cliente.uf);
                    setNascimento(response.data.cliente.nascimento);
                })
                .catch(() => {
                    console.log("Erro: Não foi possível conectar a API.")
                });
        }
        getCliente();
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-autop-2">
                        <h2>Editar Cliente</h2>
                    </div>
                    <div>
                        <Link to={"/visualizarcliente/"}
                            className="btn btn-outline-primary btn-sm m-1">Listar</Link>
                        <Link to={"/cliente/" + id}
                            className="btn btn-outline-primary btn-sm m-1">Consultar</Link>
                    </div>
                </div>

                <hr className="m-1" />

                {status.type === 'error' ? <Alert color="danger">
                    {status.message} </Alert> : ""}

                {status.type === 'success' ? <Alert color="success">
                    {status.message} </Alert> : ""}

                <Form className="p-2" onSubmit={edtCliente}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do Cliente"
                            value={nome} onChange={e => setNome(e.target.value)} />
                </FormGroup>

                <FormGroup className="p-2">
                        <Label>Endereço</Label>
                        <Input type="text" name="endereco" placeholder="Endereço"
                            value={endereco} onChange={e => setEndereco(e.target.value)}/>
                </FormGroup>

                <FormGroup className="p-2">
                        <Label>Cidade</Label>
                        <Input type="text" name="cidade" placeholder="Cidade"
                            value={cidade} onChange={e => setCidade(e.target.value)}/>
                </FormGroup>

                <FormGroup className="p-2">
                        <Label>UF</Label>
                        <Input type="text" name="uf" placeholder="UF"
                            value={uf} onChange={e => setUf(e.target.value)}/>
                </FormGroup>
                
                <FormGroup className="p-2">
                        <Label>Nascimento</Label>
                        <Input type="text" name="nascimento" placeholder="Nascimento"
                            value={nascimento} onChange={e => setNascimento(e.target.value)}/>
                </FormGroup>

                    {status.formSave ?
                        <Button type="submit" outline color="info" disabled>Salvando...
                            <Spinner size="sm" color="secondary " /></Button> :
                        <Button className="d-flex m-2" type="submit" color="primary ">Salvar</Button>}

                    <Button className="d-flex m-2" type="reset" color="secondary ">Limpar Formulário</Button>
                </Form>
            </Container>
        </div>
    )
}