import React, { Component } from 'react'
import './Demo.scss'

class ChildComponent extends Component {
  state = {
    isShow: false
  }

  handleShowHide = () => {
    // console.log(!this.state.isShow)
    this.setState({
      isShow: !this.state.isShow
    })
  }

  handleDeleteJob = (job) => {
    this.props.deleteJob(job)
  }

  render() {
    let {listJob} = this.props
    return (
      <>
        {this.state.isShow ? 
          <div>
            <div className='job-list'>
            {
              listJob.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <span onClick={() => {this.handleDeleteJob(item)}}>x</span>
                  </div>
                )
              })
            }
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>
                  hide
              </button>
            </div>
          </div>
        :
          <div>
            <button onClick={() => this.handleShowHide()} className='btn-demo'>
              show
            </button>
          </div>
        }
      </>
    )
  }
}

// const ChildComponent = (props) => {
//   let {listJob} = props
//     return (
//         <div className='job-list'>
//           {
//             listJob.map((item, index) => {
//               return (
//                 <div key={item.id}>
//                   {item.name} - {item.salary}
//                 </div>
//               )
//             })
//           }
//         </div>
//     )
// }

export default ChildComponent