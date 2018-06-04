import React, { Component } from 'react';

class Task extends Component 
{
    constructor(props)
    {
        super(props);

        // bind
        this.changeTask = this.changeTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

  
  
  render() 
  {
    return (
        <li className="task">

            <input className="toggletaskstatus" type="checkbox" value="" checked={this.props.isComplete ? "checked" : ""} onChange={this.changeTask}/>

            <span className={this.props.isComplete ? "completetask" : "incompletetask"}>
                {this.props.text}
            </span>

            <button className="deletetaskbutton" onClick={this.deleteTask}>Delete</button>

        </li>
    );
  }



  changeTask()
  {
    this.setState({isComplete: !this.props.isComplete});
    this.props.changeMethod({isComplete: !this.props.isComplete, text: this.props.text}, this.props.index);
  }



  deleteTask()
  {
    this.props.deleteMethod(this.props.index);
  }
}

export default Task;