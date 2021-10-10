import React from "react";
import '../Todo.css'


class Todo extends React.Component {
    
    render() {
        return (
            <div className="botones-acciones-box">
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        // this.setState((prevState)=>({donde: !prevState.done}))
                        // this.setState({done:!this.state.done})
                        this.props.realizarTarea(this.props.task.id)
                    }}
                    className={`acciones ${this.props.task.finalizada ? 'done' : 'notDone'}`}
                >
                    {/* {this.state.done.toString()} */}
                    {this.props.task.nombre}  <span className="estatus-tarea">{this.props.task.finalizada ? "Finalizada" : "Pendiente"}</span>
                </button>
                <button className="acciones boton-eliminar">Eliminar</button>
                <button className="acciones boton-editar">Editar</button>
            </div>
        );
    }
}

export default Todo;