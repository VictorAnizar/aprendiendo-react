import React from "react";
import '../Todo.css'


class Todo extends React.Component {
    
    render() {
        return (
            <div >
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        // this.setState((prevState)=>({donde: !prevState.done}))
                        // this.setState({done:!this.state.done})
                        this.props.realizarTarea(this.props.task.id)
                    }}
                    className={`list-item ${this.props.task.finalizada ? 'done' : 'notDone'}`}
                >
                    {/* {this.state.done.toString()} */}
                    {this.props.task.nombre}  <span className="estatus-tarea">{this.props.task.finalizada ? "Finalizada" : "Pendiente"}</span>
                </button>
            </div>
        );
    }
}

export default Todo;