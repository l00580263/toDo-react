import React, { Component } from 'react';

class NewTask extends Component 
{
  
  
  
  render() 
  {
    return (
        <div className="newtaskbar"> 
            <input type="text" placeholder="New Task" className="newtaskinput" id="addTask"/>
            <button className="addtaskbutton" onClick={this.addTask.bind(this)}>Add</button>
        </div>
    );
  }



  addTask(e)
  {
    // get input element
    const input = document.querySelector("#addTask");
    // get input value
    const taskText = input.value;
    // clear form
    input.value = "";
    // add task
    this.props.addMethod({isComplete: false, task: taskText});
  }
}

export default NewTask;