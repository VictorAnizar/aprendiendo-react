import React from "react";
import '../../EditTodo.css'
import '../../Todo.css'

class EditTodo extends React.Component {

    render() {
        return (
            <div className="modal-edit">
                <button className="acciones boton-cerrar">Cerrar</button>
                <h2>Editar tarea: {this.props.task.nombre}</h2>

                <form>

                    <input placeholder="Editar tarea" />
                </form>
                <div className="actions-edit">

                    <button

                        className="acciones boton-confirmar">Confirmar</button>
                    <button
                        className="acciones boton-cancelar"
                        onClick={(e) => {
                            e.preventDefault();
                            //Se actualiza la tarea
                        }}

                        onClick={(e) => {
                            e.preventDefault();
                            //Se destruye este componente (Modal edit)
                            this.props.handleClick()
                        }}
                    >Cancelar</button>

                </div>
            </div>
        );
    }
}

export default EditTodo;