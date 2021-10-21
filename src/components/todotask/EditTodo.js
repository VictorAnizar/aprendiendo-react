import React, { useState } from "react";
import '../../EditTodo.css'
import '../../Todo.css'

// class EditTodo extends React.Component {
function EditTodo(props){
    // state = {
    //     textField: ''
    // }
    const [textField, setTextField] = React.useState('');

    // render() {
        return (
            <div className="modal-edit">
                {/* Boton cerrar */}
                <button
                    className="acciones boton-cerrar"
                    onClick={(e) => {
                        e.preventDefault();
                        //Se destruye este componente (Modal edit)
                        props.handleClick()
                    }}
                >Cerrar</button>
                <h2>Editar tarea: {props.task.nombre}</h2>

                <form>
                    <input
                        placeholder="Editar tarea"
                        onChange={
                            (e) => {
                                // this.setState({ textField: e.target.value })
                                setTextField(e.target.value);
                            }
                        }
                    />
                </form>
                <div className="actions-edit">
                    {/* Boton confirmar */}
                    <button
                        className="acciones boton-confirmar"
                        onClick={
                            e=>{
                                e.preventDefault();
                                if(textField){
                                    props.editarTarea(props.task.id, textField)
                                }
                                props.handleClick()
                            }
                        }
                        >
                        Confirmar
                    </button>

                    {/* Boton cancelar */}
                    <button
                        className="acciones boton-cancelar"

                        onClick={(e) => {
                            e.preventDefault();
                            //Se destruye este componente (Modal edit)
                            props.handleClick()
                        }}
                    >Cancelar</button>

                </div>
            </div>
        );
    // }
}

export default EditTodo;