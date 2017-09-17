/**
 * Created by pranay on 9/17/17.
 */
import React, { Component } from 'react';

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
            this.props.onSubmit(this.state.task);
        }
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="task" onChange={ (event) => this.onChange('task', event.target.value) } />
                    <input type="submit" value="Add Task"/>
                </form>
            </div>
        );
    }
}

export default Form;
