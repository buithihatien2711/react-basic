import React, { Component } from 'react'
import './ListToDo.scss'
import AddTodo from './AddTodo'

class ListToDo extends Component {
  state = {
    listToDo: [
      {id: 'todo1', title:'Doing homework'},
      {id: 'todo2', title:'Watching TV'},
      {id: 'todo3', title:'Lean English'}
    ]
  }

  addTodo = (todo) => {
    this.setState({
      listToDo: [...this.state.listToDo, todo]
    })
  }

  render() {
    return (
      <div className='list-todo-container'>
        <AddTodo addTodo = {this.addTodo}/>
        <div className="list-todo-content">
            {this.state.listToDo.map((item, index) => {
              return (
                <div className="todo-child">
                  <span>{index + 1} - {item.title}</span>
                  <button className='edit'>Edit</button>
                  <button className='delete'>Delete</button>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}

export default ListToDo
