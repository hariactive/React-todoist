import React, { Component } from 'react'

export default class Todo extends Component {

    constructor (){
        super();
        this.state = {
            tasks: [{task:'check mails',id:1},{task:'Read Article' , id:2},{task:'Complete Home work',id:3}],
            curreTast :''
        }
    }
    handleChange=(e)=>{
        console.log(e.target.value)
            this.setState({
                curreTast:e.target.value
            })
    }

    handleSubmit = (length) => {
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.curreTast,id:this.state.tasks.length+1}]
        })
    }
    handleDelete =(id)=>{
        let narr = this.state.tasks.filter((taskobj)=>
        {
            return taskobj.id!==id
        })
        this.setState({
            tasks:[...narr]
        })
    }
  render() {
    
    console.log('render')
    return (
        
        
        


        
      <div>
        <h2 >Todo Manager</h2>
        <br/>
        <input type="text" value={this.state.curreTast} onChange={this.handleChange} />
            <button onClick={this.handleSubmit} > Add</button>
            <ul>
            {
                // =>(
                this.state.tasks.map(function(taskobj) {
                    return(
                    <li key={taskobj.id}>
                        <p>{taskobj.task}</p>
                        <button onClick={()=> this.handleDelete(taskobj.id)}>Delete</button>
                    </li>
                    )
                    }.bind(this))
            }
            </ul>

      </div>
      
    )
  }
}