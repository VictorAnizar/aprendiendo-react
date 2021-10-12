import React from "react";
import '../../EditTodo.css'
import '../../Todo.css'

class EditTodo extends React.Component {
    state = {
        textField: ''
    }
    render() {
        return (
            <div className="modal-edit">
                {/* Boton cerrar */}
                <button
                    className="acciones boton-cerrar"
                    onClick={(e) => {
                        e.preventDefault();
                        //Se destruye este componente (Modal edit)
                        this.props.handleClick()
                    }}
                >Cerrar</button>
                <h2>Editar tarea: {this.props.task.nombre}</h2>

                <form>
                    <input
                        placeholder="Editar tarea"
                        onChange={
                            (e) => {
                                this.setState({ textField: e.target.value })
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
                                if(this.state.textField){
                                    this.props.editarTarea(this.props.task.id, this.state.textField)
                                }
                                this.props.handleClick()
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
                            this.props.handleClick()
                        }}
                    >Cancelar</button>

                </div>
            </div>
        );
    }
}

export default EditTodo;