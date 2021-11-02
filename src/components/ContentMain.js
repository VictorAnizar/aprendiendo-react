import React from 'react';
import Form from './todotask/Form';
import TodoList from './todotask/TodoList';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import PageNotFound from './PageNotFound'


import '../styles.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
// import ContinuousSlider from './material/ContinuousSlider';




//Componente de clase que es el contenedor en sí
// class ContentMain extends React.Component {
function ContentMain(props) {

    const [tasks, setTasks] = React.useState([]);
    React.useEffect(() => {
        setTasks([
            { id: 1, nombre: "Sesión 1 (JSX)", finalizada: true },
            { id: 2, nombre: "Sesión 2 (Estado y propiedades)", finalizada: true },
            { id: 3, nombre: "Sesión 3 (Ciclo de vida)", finalizada: true },
            { id: 4, nombre: "Sesión 4 (Hooks)", finalizada: false },
            { id: 5, nombre: "Sesión 5 (Hooks)", finalizada: false },
            { id: 6, nombre: "Sesión 6 (Rutas)", finalizada: false },
            { id: 7, nombre: "Sesión 7 (PWA)", finalizada: false },
            { id: 8, nombre: "Sesión 8 (Material UI)", finalizada: false },
        ])
        // const URL = 'una url a consumir';
        // const getData = async () =>{
        //     const res = await fetch(URL)
        //     const data = await res.json()
        //     setTasks(data);
        // }
        // getData()

    }, [])



    //metodo para crear tareas del componente
    const createTareas = (content) => {
        let ultimoIndex;
        if (tasks.length === 0) {
            ultimoIndex = 0;
        }
        else {
            ultimoIndex = tasks[tasks.length - 1].id;
        }
        let nuevaTarea = {
            id: ultimoIndex + 1,
            nombre: content,
            finalizada: false
        }
        setTasks([...tasks, nuevaTarea]);
    }


    const eliminarTarea = (idParameter) => {
        const taskIndex = tasks.findIndex(
            (item) => item.id === idParameter
        );
        const tasksCopy = [...tasks];
        tasksCopy.splice(taskIndex, 1);
        // this.setState({ tasks: tasksCopy });
        setTasks(tasksCopy)
    }

    const realizarTarea = (idParameter) => {
        const taskIndex = tasks.findIndex(
            (item) => item.id === idParameter
        );
        const tasksCopy = [...tasks];
        tasksCopy[taskIndex] = {
            ...tasksCopy[taskIndex],
            finalizada: !tasks[taskIndex].finalizada,
        };
        // this.setState({ tasks: tasksCopy });
        setTasks(tasksCopy)
    }


    const editarTarea = (idParameter, val) => {
        const taskIndex = tasks.findIndex(
            (item) => item.id === idParameter
        );
        const tasksCopy = [...tasks];
        tasksCopy[taskIndex].nombre = val
    }


    // render() {
    return (
        //container principal
        <div className="content">
            <Router>
                <header style={
                    {

                        borderBottomWidth: "5px",
                        borderBottomStyle: "solid",
                        borderBottomColor: props.border
                    }}>

                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>
                            <Link to="/">Home</Link>
                        </Button>
                        <Button>
                            <Link to="/tareas">tareas</Link>
                        </Button>
                    </ButtonGroup>
                </header>
                <Switch>
                    <Route path="/" exact render={(props) => {
                        return (
                            <>
                                <Home
                                    {...props}
                                />
                            </>
                        );
                    }} />
                    <Route path="/tareas" exact render={() => {
                        return (
                            <>
                                <TodoList
                                    className="content"
                                    tasks={tasks}
                                    realizarTarea={(id) => realizarTarea(id)}
                                    eliminarTarea={(id) => eliminarTarea(id)}
                                    editarTarea={(id, val) => editarTarea(id, val)}
                                />
                                <Form
                                    className="content"
                                    tasks={tasks}
                                    onSubmit={(val) => createTareas(val)}
                                />
                            </>
                        )
                    }} />
                    <Route component={PageNotFound} />
                </Switch>

                <Footer year={2021} ></Footer>
                {/* </div> */}
            </Router>
        </div>
    );

    // }

};
export default ContentMain;