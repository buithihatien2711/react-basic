import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Color from '../HOC/Color'
import homeImage from '../../assets/images/image-home.jpg'
import {connect} from 'react-redux'

class Home extends Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000)
    // }

    handleOnDeleteUser = (user) => {
        // console.log('>>> user delete: ', user)
        this.props.deleteUserRedux(user)
    }

    handleOnCreateUser = () => {
        this.props.createUserRedux()
    }

    render() {
        let users  = this.props.dataRedux
        return (
            <>
                {/* {console.log('>>> check props: ',this.props.dataRedux)} */}
                <div>Hello world with React</div>
                <div>
                    <img src={homeImage} alt="" style={{width: '400px', height: 'auto', marginTop:'20px'}}/>
                </div>
                {users && users.length > 0 && 
                    users.map((item, index) => {
                        return(
                            <div key={item.id}> 
                                {index + 1} - {item.name} <span onClick={() => this.handleOnDeleteUser(item)}>x</span>
                            </div>
                        )
                    })
                }
                <div>
                    <button type='button' onClick={() => this.handleOnCreateUser()}> Add </button>
                </div>
            </>
        )
    }
}

// export default Color(Home)

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        deleteUserRedux : (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete}),
        createUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))