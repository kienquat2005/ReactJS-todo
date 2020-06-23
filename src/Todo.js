import React, { Component } from 'react';   
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm   = this.toggleForm.bind(this);  
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove() {
        alert("Are you sure want to delete?");
        this.props.removeTodo(this.props.id)
    }
    toggleForm() {
        this.setState({
            isEditing : !this.state.isEditing
        })
    }

    handleUpdate(event) {
        event.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({
            isEditing: false
        })
    
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleToggle(event) {
        this.props.toggleTodo(this.props.id)
    }
    render() { 
        let result;
        if(this.state.isEditing) {
            result = <div>
                <form onSubmit={this.handleUpdate}>
                    <input 
                    className="form-control"
                    type="text" 
                    name="task"
                    onChange={this.handleChange}
                    value={this.state.task} />
                    <button className="btn btn-success">Save</button>
                </form>
            </div>
        } else {
            result = (
                <div>
                    <li className="list-group-item mt-2" onClick={this.handleToggle}>
                        <span className={this.props.completed ? "completed" : ""}>{this.props.task}</span>
                    </li>
                    <button className="btn btn-primary mt-2" onClick={this.toggleForm}> Edit </button>
                    <button className="btn btn-danger mt-2" onClick={this.handleRemove}> Delete </button>
                </div>
            )
        }
        return result;
    }
}
 
export default Todo;