import React, { useState } from "react";
import '../../Todo.css'
import EditTodo from "./EditTodo";
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// class Todo extends React.Component {
function Todo(props) {
    // state = {
    //     clicked: false
    // }
    const [clicked, setClicked] = React.useState(false);

    //se ejecuta despues del render
    //cuando cambie la variable dentro del arreglo del segundo param, se ejecta la funcion de callback
    React.useEffect(() => {
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
        <>
            <Accordion style={{width:"100%",backgroundColor:"#eee", marginTop:"10px", marginBottom:"10px"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    
                >
                    <Typography>{/*this.*/props.task.nombre}
                        <span className="estatus-tarea">Estatus: {/*this.*/props.task.finalizada ? "Finalizada" : "Pendiente"}</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Button variant="contained"
                            color="success"
                            onClick={(e) => {
                                e.preventDefault()

                                props.realizarTarea(/*this.*/props.task.id)
                            }}
                            style={{width:"100%"}}
                            className="acciones"
                        >
                            Cambiar a estado
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
                    </Typography>
                </AccordionDetails>
            </Accordion>





            {/*this.state.*/
                clicked ?
                    <EditTodo
                        task={/*this.*/props.task}
                        handleClick={/*this.*/handleClick}
                        editarTarea={/*this.*/props.editarTarea}
                    /> : null

            }

        </>

    );
    // }
}

Todo.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number,
        nombre: PropTypes.string,
        finalizada: PropTypes.bool
    })
}


export default Todo;