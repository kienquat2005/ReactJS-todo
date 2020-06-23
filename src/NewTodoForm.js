import React, { Component } from 'react';
import uuid from 'uuid/dist/v4';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
        this.handleTaskChange = this.handleTaskChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTaskChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createTodo({...this.state, id: uuid(), completed: false});
        this.setState({
            task: ''
        })
    }
    render() { 
        return ( 
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task" className="font-weight-bold">New Todo</label>
                    <input 
                    className="form-control"
                    type="text" 
                    placeholder="New todo" 
                    id="task" 
                    name = "task"
                    value={this.state.task} 
                    onChange={this.handleTaskChange} />
                    <button className="btn btn-success mt-2">Add todo</button>
                </form>
         );
    }
}
 
export default NewTodoForm;
