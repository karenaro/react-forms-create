import React, { useState } from 'react';
import PedidosPage from '../restaurante/components/Pedido-comp/PedidoPage';

function RestaurantePage() {
   
    let clientesList =[]// lista de los clientes

    const [clientes, setClientes] =useState(clientesList);


    return (
        <div className="restaurante-page">
        <PedidosPage clientesList= {clientes}
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
        />
        
        </div>
    );
}

export default RestaurantePage;