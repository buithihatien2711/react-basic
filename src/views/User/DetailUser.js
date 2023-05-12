import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class DetailUser extends Component {
  state = {
    user : {}
  }

  async componentDidMount() {
    if(this.props.match && this.props.match.params && this.props.match.params.id) {
      let id = this.props.match.params.id
      let res = await axios.get(`https://reqres.in/api/users/${id}`)
      // console.log(res)
      this.setState({
        user : res && res.data && res.data.data ? res.data.data : {}
      })
    }
  }

  handleOnClickBack = () => {
    this.props.history.push(`/user`)
  }

  render() {
    let {user} = this.state
    let isEmptyObj = Object.keys(user).length === 0
    return (
      <>
        {isEmptyObj === false && 
        <>
          <div>User's name: {user.first_name} {user.last_name}</div>
          <div>User's email: {user.email}</div>
          <div>
            <img src={user.avatar} alt="" />
          </div>
          <div>
            <button type='button' onClick={() => this.handleOnClickBack()}>Back</button>
          </div>
        </>
        }
      </>
    )
  }
}

export default withRouter(DetailUser)