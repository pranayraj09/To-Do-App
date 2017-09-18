/**
 * Created by pranay on 9/17/17.
 */
import React, { Component } from 'react';
import './components.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(key, value) {
        this.setState({
            [key] : value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        if(this.state.task === '') {
            alert("Please enter the task.");
        } else {
            this.setState({
                task:''
            })
            this.props.onSubmit(this.state.task);
        }
    }

    render() {
        return (
            <div className="form">
                <form className="form-wrapper" onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Add a to do..." value={this.state.task} className="form-control" name="task" onChange={ (event) => this.onChange('task', event.target.value) } />
                    <button type="submit" className="btn btn-primary" value="Add Task">Add To Do</button>
                </form>
            </div>
        );
    }
}

export default Form;
