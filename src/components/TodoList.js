import React from "react";
import Todo from './Todo'
import '../TodoList.css'


function TodoList() {
    const tasks = ["Elem 1", "Elem 2", "Elem 3"];

    return (
        <div className="list-wrapper">
            {tasks.map((task)=>(
                <Todo task={task}/>
            ))}p
        </div>
    );
}

export default TodoList;