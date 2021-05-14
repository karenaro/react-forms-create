import React, { useState } from 'react';
import PedidosPage from '../restaurante/components/Pedido-comp/PedidoPage';

function RestaurantePage() {
   
    let clientesList =[]// lista de los clientes
    let pedidosList =[]// lista de los clientes

    const [clientes, setClientes] =useState(clientesList);
    const [pedidos, setPedidos] =useState(pedidosList);


    return (
        <div className="restaurante-page">
        <PedidosPage clientesList= {clientes}
        pedidosList={pedidos}
            onAddCliente={(clienteObj) =>{
                //1.crear nuevo arreglo de clientes
                const newClientes = [];

                //console.log(clienteObj)
                for(let i=0; i<clientes.length; i++){
                    newClientes.push({
                        ...clientes[i],
                        clientes:[...clientes[i].clientes, clienteObj]
                    
                    }
                    );

                }
                // cambiar el arreglo clientes atravez de la function setcliente
                setClientes(newClientes);
                //console.log(newClientes);

            }}
            onAddPedido={(pedidoObj) =>{
                //1.crear nuevo arreglo de clientes
                const newPedido = [];

                //console.log(pedidoObj)
                for(let i=0; i<pedidos.length; i++){
                    newPedido.push({
                        ...pedidos[i],
                        pedidos:[...pedidos[i].pedidos, pedidoObj]
                    
                    }
                    );

                }
                // cambiar el arreglo pedidos atravez de la function setcliente
                setPedidos(newPedido);
                //console.log(newPedido);

            }}
        />
        
        </div>
    );
}

export default RestaurantePage;