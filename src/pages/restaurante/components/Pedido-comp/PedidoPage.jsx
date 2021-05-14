import React from 'react';
import  FormularioPage from '../Formulario-comp/formularioPage';

function PedidosPage(props) {
    return (
        <div className="pedidos-page">
        <FormularioPage clientesList ={props.clientesList}
        pedidosList ={props.pedidosList}
            onAddCliente={props.onAddCliente}
            onAddPedido={props.onAddPedido}
        />
        </div>
    );
}

export default PedidosPage; 