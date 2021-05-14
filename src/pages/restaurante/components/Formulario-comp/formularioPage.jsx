import React from "react";
import './formularioPage.css'
import { Form, Button } from "react-bootstrap";

function FormularioPage() {
  return (
    <div className="formulario-page">
      <div class='recuadro' id="uno">
      
      <form className="formulario">
      <label for="nya">Nombres y Apellidos:</label><br></br>
      <input type="text" name="nya" id="input" />
    <br></br>
      <label for="email">Email:</label><br></br>
      <input type="text" name="email" id="input" />
      <br></br>
      <label for="edad">Edad:</label><br></br>
      <input type="text" name="edad" id="input" />
      <br></br>
      <br></br>
      <Button variant="primary">Primary</Button>{" "}
    </form>
      </div>
      <div class='recuadro' id="dos">
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque potenti,
      cubilia turpis placerat id parturient aptent vivamus volutpat ornare, mus laoreet
       dictumst nostra inceptos pulvinar vitae pharetra.</p>
      </div>
    <br></br>
      <div class='recuadro' id="tres">
      <form className="formulario">
      <label for="nya">Nombres y Apellidos:</label><br></br>
      <input type="text" name="nya" id="input" />
    <br></br>
      <label for="email">Email:</label><br></br>
      <input type="text" name="email" id="input" />
      <br></br>
      <label for="edad">Edad:</label><br></br>
      <input type="text" name="edad" id="input" />
      <br></br>
      <br></br>
      <Button variant="primary">Primary</Button>{" "}
    </form>
      </div>
      <div class='recuadro' id="cuatro">
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque potenti,
      cubilia turpis placerat id parturient aptent vivamus volutpat ornare, mus laoreet
       dictumst nostra inceptos pulvinar vitae pharetra.</p>
      </div>
      
      
    </div>
  );
}

export default FormularioPage;
