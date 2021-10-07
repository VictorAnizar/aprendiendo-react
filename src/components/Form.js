import React from "react";
import '../Form.css'
function Form() {
    return (
        <form>
        <input type="text" className="input" placeholder="Agrega tarea"/>
        <button className="button" onClick={()=>{}}>Crear tarea </button>
        </form>
    );
}

export default Form;