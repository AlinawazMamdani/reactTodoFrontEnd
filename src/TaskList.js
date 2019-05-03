import React, { Component } from 'react';
import Task from './Task'
import { toUnicode } from 'punycode';

export default class TaskList extends Component {

    constructor(props) {
        super(props)
    }
    // componentDidUpdate(props) {
    //     this.setState({
    //         task: this.props.tasks
    //     });
    // }

    render() {
        //this.state.arr.map((arr,i)=><p key={"task"+ i}> {arr}</p>)}
        //{this.state.task.map((task, i) => <Task Key={task + i} taskText={task.todo}/>)}
        return (
            <div id="">
                {this.props.tasks.map((tasks, i) => <Task task={tasks.todo} taskId={tasks.idTodo} key={i} deleteTasks={this.props.deleteTasks} getTasks={this.props.getTasks}/>)}
                {/* {this.props.tasks.map((tasks, i) =>console.log(tasks.idTodo))}
                {/* {this.state.task.map((task,i)=> <Task tasksExist={task} i={i} /> )} */}


            </div>
        )
    }
}