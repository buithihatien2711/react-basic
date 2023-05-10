import React, { Component } from 'react'

class AddComponent extends Component {
    state = {
        title : '',
        salary :'',
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    } 

    handleSalaryChange = (event) => {
        this.setState({
            salary: event.target.value
        })
    } 

    handleOnSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state)
        if(!this.state.title || !this.state.salary){
            alert('Missing required param')
            return;
        }

        this.props.addNewJob(
            {
                id: Math.floor(Math.random()*1001),
                title: this.state.title,
                salary: this.state.salary
            }
        )

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">First name:</label><br />
                <input type="text" value={this.state.title} onChange={(event) => this.handleTitleChange(event)}/><br />
                <label htmlFor="lname">Last name:</label><br />
                <input type="text" value={this.state.salary} onChange={(event) => this.handleSalaryChange(event)}/><br /><br />
                <input type="submit" value="Submit" onClick={(event) => this.handleOnSubmit(event)}/>
            </form>
    )
  }
}

export default AddComponent