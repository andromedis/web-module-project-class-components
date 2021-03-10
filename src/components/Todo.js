import React from 'react';
import './Todo.css';

const CHECKED_BOX = '\u2612'
const UNCHECKED_BOX = '\u2610'

class Todo extends React.Component {
    render() {
        return (
            <div 
                onClick={() => this.props.toggle(this.props.task.id)} 
                className={`task${this.props.task.completed ? ' completed' : ''}`}
            >
                { this.props.task.completed 
                    ? CHECKED_BOX 
                    : UNCHECKED_BOX
                } <span>{this.props.task.task}</span>
            </div>
        )
    }
}

export default Todo;