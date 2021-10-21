import React from 'react';
import Img1 from '../assets/img/img1.png'
import Form from './todotask/Form';
import TodoList from './todotask/TodoList';
// import ContinuousSlider from './material/ContinuousSlider';

//Componente de una tarjeta simple
const Card = () => {
    return <div style={{
        border: "1px solid gray",
        borderRadius: "5px",
        width: "250px",
        textAlign: "center",
        padding: "0px 10px"
    }}>
        <h3>Negative One</h3>
        <img src={Img1} alt="imagen1" width="100%" />
        <p className="justificado">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus pulvinar tempus. Nullam vitae odio sagittis quam varius pharetra. Praesent id est vitae justo iaculis imperdiet. </p>
    </div>
}

//Componente de lista de tarjetas
const ListCards = () => {
    return (
        <main >
            <h1>Our products</h1>
            <p className="justificado">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus pulvinar tempus. Nullam vitae odio sagittis quam varius pharetra. Praesent id est vitae justo iaculis imperdiet. Nullam euismod lectus libero, quis scelerisque lorem pretium ac. Suspendisse eros mauris, viverra vitae blandit vitae, rutrum blandit tortor. Maecenas vestibulum at arcu at placerat. Vestibulum ac posuere risus, eget porttitor orci. Etiam viverra faucibus sapien, sit amet ornare justo pharetra ac. Donec nec purus tristique, suscipit metus ut, dignissim lacus. Donec cursus ultricies lorem, sed tempus dolor sagittis a.</p>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px"
            }}>
                <Card />
                <Card />
                <Card />
            </div>

        </main>
    );
}


// let parsedTodos = [];
// const localStorageTodos = localStorage.getItem('TASKS_V1');



//Componente de clase que es el contenedor en sí
// class ContentMain extends React.Component {
function ContentMain(props) {
    //arreglo de estado del componente
    // state = {
    //     tasks: [
    //         {
    //             id: 1,
    //             nombre: "Comer pizza",
    //             finalizada: false
    //         },
    //         {
    //             id: 2,
    //             nombre: "Comprar pan",
    //             finalizada: true
    //         },
    //         {
    //             id: 3,
    //             nombre: "Do JiuJitsu",
    //             finalizada: true
    //         }
    //     ]
    // }

    const [tasks, setTasks] = React.useState([]);
    React.useEffect(() => {
        setTasks([
            { id: 1, nombre: "Sesión 1 (JSX)", finalizada: true },
            { id: 1, nombre: "Sesión 2 (Estado y propiedades)", finalizada: true },
            { id: 1, nombre: "Sesión 3 (Ciclo de vida)", finalizada: true },
            { id: 1, nombre: "Sesión 4 (Hooks)", finalizada: false },
            { id: 1, nombre: "Sesión 5 (Hooks)", finalizada: false },
            { id: 1, nombre: "Sesión 6 (Rutas)", finalizada: false },
            { id: 1, nombre: "Sesión 7 (PWA)", finalizada: false },
            { id: 1, nombre: "Sesión 8 (Material UI)", finalizada: false },
        ])
    }, [])


    //cuando se cargue este componente, se ejecuta lo de este metodo.
    //este metodo se ejecuta despues de render
    // componentDidMount() {

    //     this.setState({
    //         tasks: [
    //             {
    //                 id: 1,
    //                 nombre: "Comer pizza",
    //                 finalizada: false
    //             },
    //             {
    //                 id: 2,
    //                 nombre: "Comprar pan",
    //                 finalizada: true
    //             },
    //             {
    //                 id: 3,
    //                 nombre: "Do JiuJitsu",
    //                 finalizada: true
    //             }
    //         ]
    //     });
    //     localStorage.setItem('TASKS_V1', JSON.stringify(this.state.tasks));
    //     // parsedTodos = JSON.stringify(...this.state.tasks);
    // }

    //metodo para crear tareas del componente
    const createTareas=(content) =>{
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
        setTasks((prevState) => ({
            tasks: [...prevState.tasks, nuevaTarea]
        }));
    }


    const eliminarTarea=(idParameter) =>{
        const taskIndex = tasks.findIndex(
            (item) => item.id === idParameter
        );
        const tasksCopy = [...tasks];
        tasksCopy.splice(taskIndex, 1);
        // this.setState({ tasks: tasksCopy });
        setTasks(tasksCopy)
    }

    const realizarTarea=(idParameter) => {
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


    const editarTarea=(idParameter, val)=> {
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
                {/* <ContinuousSlider/> */}
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
                <ListCards />
            </div>
        );

    // }

};
export default ContentMain;