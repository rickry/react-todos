import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
import Addtodo from './AddTodo'

class App extends Component {

  //Hier wordt er vast data in de state gedrukt
  state = {
    todos: [
      {id: 1, content: 'Doe iets leuks'},
      {id: 2, content: 'Drink bier'}
    ]
  }

    //hier is een methode dat er een todo wordt verwijderd aan de hand van het ID
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    //Hier wordt de state aangepast
    this.setState({
      todos
    })
  }
//Hier word een todo toegevoegd.
  addTodo = (todo) =>{
    //Hier word een random filter toegepast
    todo.id = Math.random()
    let todos = [...this.state.todos, todo];
    //Hier wordt de state aangepast
    this.setState({
      todos
    })
  }
//Het renderen van de todo
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <Addtodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
