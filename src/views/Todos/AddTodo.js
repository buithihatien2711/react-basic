import React, { Component } from 'react'
import { toast } from 'react-toastify';

class AddTodo extends Component {
  state = {
      id : '',
      title : ''
  }

  handleOnChangeTodo = (event) => {
    this.setState({
        title: event.target.value
    })
  }

  handleAddTodo = () => {
    if(!this.state.title){
      toast.error('title must be filled')
      return
    }

    let todo = {
                  id: Math.floor(Math.random()*1000),
                  title: this.state.title
                }

    this.props.addTodo(todo)

    this.setState({
      title: ''
    })

    toast.success("Wow so easy!")
  }

  render() {
    return (
        <div className='add-todo'>
            <input type="text" onChange={(event) => this.handleOnChangeTodo(event)} value = {this.state.title}/>
            <button type='button' className='add' onClick={() => this.handleAddTodo()}>Add</button>
        </div>
    )
  }
}

export default AddTodo
