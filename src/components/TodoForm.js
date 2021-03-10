import React from 'react';

class TodoForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input
                    type='text'
                    name='inputText'
                    value={this.props.inputText}
                    onChange={this.props.handleChange}
                />
                <button 
                    type='submit'>
                        Add Task
                </button>
                <button 
                    type='button' 
                    onClick={this.props.handleClear}>
                        Clear Completed
                </button>
            </form>
        )
    }
}

export default TodoForm;