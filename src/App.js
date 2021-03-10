import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [],
      inputText: '',
    };
  }

  toggleTask = (clickedId) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        return task.id === clickedId
          ? { ...task, completed: !task.completed }
          : task
      })
    })
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const newTask = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      tasks: [ ...this.state.tasks, newTask],
      inputText: '',
    })
  }

  handleClear = (evt) => {
    evt.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.completed
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <h2>To-do List</h2>
        <TodoList 
          tasks={this.state.tasks} 
          toggle={this.toggleTask}
        />
        <TodoForm 
          inputText={this.state.inputText} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
