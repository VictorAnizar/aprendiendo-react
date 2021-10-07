import React from "react";
import Todo from './Todo'
import '../TodoList.css'


function TodoList(props) {
    

    return (
        <div className="list-wrapper">
            {props.tasks.map((task)=>(
                <Todo task={task}/>
            ))}p
        </div>
    );
}

export default TodoList;