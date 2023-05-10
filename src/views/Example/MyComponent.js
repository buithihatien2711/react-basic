import React, { Component, startTransition } from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent';

class MyComponent extends Component {
    state = {
        arrJob : [
            {id: 'job1', title: 'Developer', salary: 1000},
            {id: 'job2', title: 'Tester', salary: 800},
            {id: 'job3', title: 'Designer', salary: 900}
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJob : [...this.state.arrJob, job]
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJob
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJob: currentJobs
        })
    }

    componentDidMount() {
        console.log('>>> run component did mount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>>> run didupdate: ', 'prev state: ', prevState, 
                                                    'current sate: ', this.state)
    }
    
    render() {
        console.log('>>> run render')
        return (
            <>
                <AddComponent addNewJob = {this.addNewJob}/>
                <ChildComponent listJob={ this.state.arrJob } deleteJob = {this.deleteJob}/>
            </>
        )
    }
}

export default MyComponent;