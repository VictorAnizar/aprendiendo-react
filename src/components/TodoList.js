import React from "react";
import Todo from './Todo'
import '../TodoList.css'





class TodoList extends React.Component {

    render(){

        console.log(this.props.tasks);

        return (
            
            <div className="list-wrapper">
                <h1>Hay {this.props.tasks.length} tareas(s): 
                {
                this.props.tasks.filter((task) => task.finalizada==true).length
                } Finalizadas y {
                this.props.tasks.filter((task) => task.finalizada==false).length
                }  Pendientes  </h1>
                
                {this.props.tasks.map((task) => (
                    <Todo task={task}/>   
                ))}
            
            </div>
        );
    }
}

export default TodoList;