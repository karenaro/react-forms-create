import React, { useState } from 'react';
import "./formularioPage.css";
import { Form, Button } from "react-bootstrap";

function FormularioPage(props) {
  
    const [name, setName] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [platillo, setPlatillo] = useState('');
    const [tamaño, setTamaño] = useState('');
    const [cantidad, setCantidad] = useState('');

    const nuevoCliente =(event) =>{
        event.preventDefault();
        const newCliente= {
          id: name,
          name:name,
          direccion: direccion,
          telefono:telefono

        }

        props.onAddCliente(newCliente);
       
        console.log('name' + name);
        console.log('direccion' + direccion);
        console.log('telefono' + telefono);
    }
    const nuevoPedido =(event) =>{
      event.preventDefault();
     
      console.log('platillo' + platillo);
      console.log('tamaño' + tamaño);
      console.log('cantidad' + cantidad);
  }


  return (
    <div className="formulario-page">
      <div class="recuadro" id="uno">
        <Form className="formulario">
          <label for="nya">Nombres y Apellidos:</label>
          <br></br>
          <input type="text"  id="input" value={name} onChange={(event)=>{
            setName(event.target.value);

            //console.log(event.target.value);
        }}/>
          <br></br>
          <label for="email">Direccion:</label>
          <br></br>
          <input type="text"  id="input" value={direccion} onChange={(event)=>{
            setDireccion(event.target.value);

            //console.log(event.target.value);
        }} />
          <br></br>
          <label for="edad">Telefono de contacto:</label>
          <br></br>
          <input type="text"  id="input" value={telefono} onChange={(event)=>{
            setTelefono(event.target.value);

            //console.log(event.target.value);
        }}/>
          <br></br>
          <br></br>
          <Button variant="success" onClick={nuevoCliente}>Crear Cliente</Button>{" "}
        </Form>
      </div>
      <div class="recuadro" id="dos">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque
          potenti, cubilia turpis placerat id parturient aptent vivamus volutpat
          ornare, mus laoreet dictumst nostra inceptos pulvinar vitae pharetra.
        </p>
      </div>
      <br></br>
      <div class="recuadro" id="tres">
        <Form className="formulario">
          <label for="nya">Platillo del menu:</label>
          <br></br>
          <input type="text" id="input" value={platillo} onChange={(event)=>{
            setPlatillo(event.target.value);

            //console.log(event.target.value);
        }}/>
          <br></br>
          <label for="email">Tamaño:</label>
          <br></br>
          <input type="text" id="input" value={tamaño} onChange={(event)=>{
            setTamaño(event.target.value);

            //console.log(event.target.value);
        }} />
          <br></br>
          <label for="edad">Cantidad:</label>
          <br></br>
          <input type="text" id="input" value={cantidad} onChange={(event)=>{
            setCantidad(event.target.value);

            //console.log(event.target.value);
        }} />
          <br></br>
          <br></br>
          <Button variant="success" onClick={nuevoPedido}>Crear Pedido</Button>{" "}
        </Form>
      </div>
      <div class="recuadro" id="cuatro">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque
          potenti, cubilia turpis placerat id parturient aptent vivamus volutpat
          ornare, mus laoreet dictumst nostra inceptos pulvinar vitae pharetra.
        </p>
      </div>
    </div>
  );
}

export default FormularioPage;
