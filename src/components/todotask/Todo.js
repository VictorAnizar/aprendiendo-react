import React, { useState } from "react";
import '../../Todo.css'
import EditTodo from "./EditTodo";
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

// class Todo extends React.Component {
function Todo(props) {
    // state = {
    //     clicked: false
    // }
    const [clicked, setClicked] = React.useState(false);

    //se ejecuta despues del render
    //cuando cambie la variable dentro del arreglo del segundo param, se ejecta la funcion de callback
    React.useEffect(()=>{
        console.log("Se clickeo");
    }, [clicked])


    const handleClick = () => {
        // this.setState((prev) => (
        // {
        //     clicked: !prev.clicked
        // }
        setClicked(!(clicked));
        
        // ));
    }

    // render() {
    return (
        <div className="botones-acciones-box">
            <Button variant="outlined"
                color="success"
                onClick={(e) => {
                    e.preventDefault()
                        // this.setState((prevState)=>({donde: !prevState.done}))
                        // this.setState({done:!this.state.done})
                        /*this.*/props.realizarTarea(/*this.*/props.task.id)
                }}
                className={`acciones ${/*this.*/props.task.finalizada ? 'done' : 'notDone'}`}
            >
                {/* {this.state.done.toString()} */}
                {/*this.*/props.task.nombre}  <span className="estatus-tarea">Estatus: {/*this.*/props.task.finalizada ? "Finalizada" : "Pendiente"}</span>
            </Button>

            <Button variant="contained"
                color="error"
                onClick={(e) => {
                    e.preventDefault();
                        /*this.*/props.eliminarTarea(/*this.*/props.task.id)
                }}
                className="acciones boton-eliminar">Eliminar</Button>

            <Button variant="contained"
                color="secondary"
                onClick={(e) => {
                    e.preventDefault();
                        //Aqui se llama al componente de edicion de tarea
                        /*this.*/handleClick();
                    console.log(clicked);
                }}
                className="acciones boton-editar">Editar</Button>

            {/*this.state.*/
            clicked ?
                <EditTodo
                    task={/*this.*/props.task}
                    handleClick={/*this.*/handleClick}
                    editarTarea={/*this.*/props.editarTarea}
                /> : null

            }

        </div>

    );
    // }
}

Todo.propTypes={
    task: PropTypes.shape({
        id: PropTypes.number,
        nombre: PropTypes.string,
        finalizada: PropTypes.bool
    })
}


export default Todo;