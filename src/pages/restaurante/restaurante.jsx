import React, {useState} from 'react';
import PedidosPage from '../restaurante/components/Pedido-comp/PedidoPage';

function RestaurantePage() {
    const [pedidos, setPedidos]= useState('lista') //aca va una lista



    return (
        <div className="restaurante-page">
        <PedidosPage litsa= {pedidos} />
        
        </div>
    );
}

export default RestaurantePage;