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

    render() {
        return (
            <>
                {console.log('>>> check props: ', this.props)}
                <div>Hello world with React</div>
                <div>
                    <img src={homeImage} alt="" style={{width: '400px', height: 'auto', marginTop:'20px'}}/>
                </div>
            </>
        )
    }
}

// export default Color(Home)

const mapStateToProps = (state) => {
    return {
        data: state.user
    }
}

export default connect(mapStateToProps)(Color(Home))