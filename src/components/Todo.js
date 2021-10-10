import React from "react";
import '../Todo.css'


class Todo extends React.Component {
    state = {
        done: this.props.task.finalizada
    };
    render() {
        console.log(  this.props.task.nombre+"--"+  this.state.done    );
        return (
            <div >
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        // this.setState((prevState)=>({donde: !prevState.done}))
                        // this.setState({done:!this.state.done})
                        this.setState(
                            (prev) => (
                                { done: !prev.done }
                            )
                        )
                    }}
                    className={`list-item ${this.state.done ? 'done' : 'notDone'}`}
                >
                    {/* {this.state.done.toString()} */}
                    {this.props.task.nombre}  <span className="estatus-tarea">{this.state.done ? "Finalizada" : "Pendiente"}</span>
                </button>
            </div>
        );
    }
}

export default Todo;