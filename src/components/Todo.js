import React from "react";
import '../Todo.css'


class Todo extends React.Component {
    state = {
        done: true
    };

    render() {
        return (
            <div className={`list-item ${this.state.done ? 'done' : ''}`}>
                {this.props.task}
                <button
                onClick={()=>this.setState({done:false})}
                className="delete is-pulled-right"
                style={{height: 15, width: 10}} />
            </div>
        );
    }
}

export default Todo;