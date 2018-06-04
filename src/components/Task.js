import React, { Component } from 'react';

class Task extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            isComplete: this.props.isComplete,
            task: this.props.task,
            index: this.props.index,
            changeMethod: this.props.changeMethod,
            deleteMethod: this.props.deleteMethod,
        }

        // bind
        this.changeTask = this.changeTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

  
  
  render() 
  {
    return (
        <li className="task">

            <input className="toggletaskstatus" type="checkbox" value="" checked={this.state.isComplete ? "checked" : ""} onClick={this.changeTask}/>

            <span className={this.state.isComplete ? "completetask" : "incompletetask"}>
                {this.state.task}
            </span>

            <button className="" className="deletetaskbutton" onClick={this.deleteTask}>Delete</button>

        </li>
    );
  }



  changeTask()
  {
    this.setState({isComplete: !this.state.isComplete});
    this.state.changeMethod({isComplete: !this.state.isComplete, task: this.state.task}, this.state.index);
  }



  deleteTask()
  {
    console.log(this.state.index);
    this.state.deleteMethod(this.state.index);
  }
}

export default Task;