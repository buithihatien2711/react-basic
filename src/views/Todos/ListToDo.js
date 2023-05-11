import React, { Component } from 'react'
import './ListToDo.scss'
import AddTodo from './AddTodo'
import { toast } from 'react-toastify'

class ListToDo extends Component {
  state = {
    listToDo: [
      {id: 'todo1', title:'Doing homework'},
      {id: 'todo2', title:'Watching TV'},
      {id: 'todo3', title:'Lean English'}
    ],
    editTodo: {}
  }

  addTodo = (todo) => {
    this.setState({
      listToDo: [...this.state.listToDo, todo]
    })
  }

  handleOnDeleteTodo = (todo) => {
    let currentTodos = this.state.listToDo
    currentTodos = currentTodos.filter(item => item.id !== todo.id)
    this.setState({
      listToDo: currentTodos
    })

    toast.success('Delete success!')
  }

  handleOnEditTodo = (todo) => {
    let {editTodo, listToDo} = this.state
    let isEmptyObj = Object.keys(editTodo).length === 0

    // save
    if(isEmptyObj === false && editTodo.id === todo.id){
      let listTodoCopy = [...listToDo]
      let objIndex = listTodoCopy.findIndex(item => item.id === editTodo.id)
      listTodoCopy[objIndex].title = editTodo.title

      this.setState({
        listToDo: listTodoCopy,
        editTodo: {}
      })
      toast.success('edit success')
      return
    }

    this.setState({
      editTodo: todo
    })
  }

  handleOnChangeTodo = (event) => {
    let editTodoCopy = {...this.state.editTodo}
    editTodoCopy.title = event.target.value
    console.log(event.target.value)
    this.setState({
      editTodo: editTodoCopy
    })
  }

  render() {
    let {listToDo, editTodo} = this.state
    let isEmptyObj = Object.keys(editTodo).length === 0
    return (
      <div className='list-todo-container'>
        <p>Simple ToDo app with React</p>
        <AddTodo addTodo = {this.addTodo}/>
        <div className="list-todo-content">
            {listToDo.map((item, index) => {
              return (
                <div className="todo-child" key={index}>
                  {isEmptyObj === true ?
                    <span>{index + 1} - {item.title}</span>
                    :
                    <>
                    {item.id === editTodo.id ?
                      <span>{index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnChangeTodo(event)}/></span>
                    :
                      <span>{index + 1} - {item.title}</span>
                    }
                    </>
                    
                  }

                  <button className='edit' onClick={() => this.handleOnEditTodo(item)}>
                    {isEmptyObj === false && item.id === editTodo.id ? 'Save' : 'Edit'}
                  </button>
                  <button className='delete' onClick={() => this.handleOnDeleteTodo(item)}>Delete</button>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}

export default ListToDo
