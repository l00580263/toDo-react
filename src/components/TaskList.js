import React, { Component } from 'react';
import Task from './Task';
import NewTask from './NewTask';

class TaskList extends Component 
{
  constructor(props)
  {
      super(props);

      this.state = {
          tasks: [],
      }

      // populate tasks
      this.state.tasks = JSON.parse(localStorage.getItem("TASKS"));

      // generate fake tasks if none are in local storage
      if(this.state.tasks == null)
      {
          this.state.tasks = [{isComplete: false, task: "Finish ToDo List"}, {isComplete: true, task: "Turn in Weather App"}];
      }

      // bind
      this.change = this.change.bind(this);
      this.add = this.add.bind(this);
      this.delete = this.delete.bind(this);
  }
  
  
  render() 
  {
    localStorage.setItem("TASKS", JSON.stringify(this.state.tasks));

    return (
        <div>
            <div className="taskheader">
                <h1>To Do List</h1>
                <NewTask addMethod={this.add}/>
            </div>
            
            <ul className="tasklist">
                {
                    this.state.tasks.map(
                        (taskToPass, index) => {return <Task task={taskToPass.task} isComplete={taskToPass.isComplete} index={index} changeMethod={this.change} deleteMethod={this.delete}/>}
                    )
                }
            </ul>
        </div>
    );
  }



  change(task, index)
  {
    // alter tasks
    let tmpTasks = JSON.parse(JSON.stringify(this.state.tasks));
    tmpTasks[index] = task;

    // apply altered tasks
    this.setState({tasks: tmpTasks});
  }



  add(task)
  {
    // alter tasks
    let tmpTasks = JSON.parse(JSON.stringify(this.state.tasks));
    tmpTasks.push(task);

    // apply altered tasks
    this.setState({tasks: tmpTasks});
  }



  delete(index)
  {
    // alter tasks
    let tmpTasks = JSON.parse(JSON.stringify(this.state.tasks));
    tmpTasks.splice(index, 1);

    // apply altered tasks
    this.setState({tasks: tmpTasks});
  }

}

export default TaskList;