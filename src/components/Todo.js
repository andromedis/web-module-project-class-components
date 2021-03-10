import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    render() {
        return (
            <div 
                onClick={() => this.props.toggle(this.props.task.id)} 
                className={`task${this.props.task.completed ? ' completed' : ''}`}
            >
                <p>{this.props.task.task}</p>
            </div>
        )
    }
}

export default Todo;