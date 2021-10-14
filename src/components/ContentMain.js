import React from 'react';
import Img1 from '../assets/img/img1.png'
import Form from './todotask/Form';
import TodoList from './todotask/TodoList';

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

//Componente de clase que es el contenedor en sí
class ContentMain extends React.Component {
    //arreglo de estado del componente
    state = {
        tasks: []
    }

    //cuando se cargue este componente, se ejecuta lo de este metodo.
    //este metodo se ejecuta despues de render
    componentDidMount(){
        
       setTimeout(() => {
        this.setState({
            tasks: [
                {
                    id: 1,
                    nombre: "Comer pizza",
                    finalizada: false
                },
                {
                    id: 2,
                    nombre: "Comprar pan",
                    finalizada: true
                },
                {
                    id: 3,
                    nombre: "Do JiuJitsu",
                    finalizada: true
                }
            ]
        });
       }, 2000);
    }

    //metodo para crear tareas del componente
    createTareas(content) {
        let ultimoIndex ;
        if (this.state.tasks.length===0) {
            ultimoIndex = 0;
        }
        else{
          ultimoIndex  = this.state.tasks[this.state.tasks.length - 1].id;
        }
        let nuevaTarea = {
            id: ultimoIndex + 1,
            nombre: content,
            finalizada: false
        }
        this.setState((prevState) => ({
            tasks: [...prevState.tasks, nuevaTarea]
        }));
    }


    eliminarTarea(idParameter) {
        const taskIndex = this.state.tasks.findIndex(
            (item) => item.id === idParameter
        );
        const tasksCopy = [...this.state.tasks];
        tasksCopy.splice( taskIndex,1);
        this.setState({ tasks: tasksCopy });
    }

    realizarTarea(idParameter) {
        const taskIndex = this.state.tasks.findIndex(
            (item) => item.id === idParameter
        );
        const tasksCopy = [...this.state.tasks];
        tasksCopy[taskIndex] = {
            ...tasksCopy[taskIndex],
            finalizada: !this.state.tasks[taskIndex].finalizada,
        };
        this.setState({ tasks: tasksCopy });
    }


    editarTarea(idParameter, val){
        const taskIndex = this.state.tasks.findIndex(
            (item) => item.id === idParameter
        );
        const tasksCopy = [...this.state.tasks];
        tasksCopy[taskIndex].nombre=val
    }

    render() {
        return (
            //container principal
            <div className="content">

                <TodoList
                    className="content"
                    tasks={this.state.tasks}
                    realizarTarea={(id) => this.realizarTarea(id)}
                    eliminarTarea={(id) => this.eliminarTarea(id)}
                    editarTarea={(id, val)=>this.editarTarea(id, val)}
                />

                <Form
                    className="content"
                    tasks={this.state.tasks}
                    onSubmit={(val) => this.createTareas(val)}
                />
                <ListCards />
            </div>
        );

    }

};
export default ContentMain;