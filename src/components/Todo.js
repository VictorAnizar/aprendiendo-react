import React from "react";
import '../Todo.css'
import EditTodo from "./EditTodo";


class Todo extends React.Component {
    state = {
        clicked: false
    }

    handleClick() {
        this.setState((prev)=>({
            clicked: !prev.clicked
        }));
    }

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
                    {this.props.task.nombre}  <span className="estatus-tarea">Estatus: {this.props.task.finalizada ? "Finalizada" : "Pendiente"}</span>
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        this.props.eliminarTarea(this.props.task.id)
                    }}
                    className="acciones boton-eliminar">Eliminar</button>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        //Aqui se llama al componente de edicion de tarea
                        this.handleClick()
                    }}
                    className="acciones boton-editar">Editar</button>
                {this.state.clicked ? <EditTodo 
                task={this.props.task }
                handleClick={this.handleClick }/> : null}

            </div>

        );
    }
}

export default Todo;