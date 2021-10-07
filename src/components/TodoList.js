import React from "react";
import Todo from './Todo'
import '../TodoList.css'


function TodoList() {
    const tastks = ["Elem 1", "Elem 2", "Elem 3"];

    return (
        <div className="list-wrapper">
            {tastks.map((task)=>(
                <Todo task={task}/>
            ))}
        </div>
    );
}

export default TodoList;