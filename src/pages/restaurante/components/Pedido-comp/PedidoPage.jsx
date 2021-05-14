import React from 'react';
import  FormularioPage from '../Formulario-comp/formularioPage';

function PedidosPage(props) {
    return (
        <div className="pedidos-page">
        <FormularioPage clientesList ={props.clientesList}
            onAddCliente={props.onAddCliente}
        />
        </div>
    );
}

export default PedidosPage; 