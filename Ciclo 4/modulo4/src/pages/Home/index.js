import { Container } from 'reactstrap';

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-autop-2">
                        <h2>Home</h2>
                    </div>
                    <div className="p-2">
                        <a href="/visualizarcliente"
                        className="btn btn-outline-primary btn-sm">Cliente</a>
                    </div>
                    <div className="p-2">
                        <a href="/visualizarservico"
                        className="btn btn-outline-primary btn-sm">Serviço</a>
                    </div>
                    <div className="p-2">
                        <a href="/visualizarpedido"
                        className="btn btn-outline-primary btn-sm">Pedido</a>
                    </div>
                </div>
            </Container> 
        </div>
      
    )
}
