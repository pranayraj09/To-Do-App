/**
 * Created by pranay on 9/17/17.
 */
import React, { Component } from 'react';
import Form from '../components/Form';
import List from '../components/List';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    title: "Task 1",
                    isCompleted: false
                },
                {
                    title: "Task 2",
                    isCompleted: true
                }
            ]
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    onSubmit(task) {
        let tasks = this.state.tasks;
        tasks.push({
            title: task,
            isCompleted: false
        })
        this.setState({
            tasks
        })
    }

    onUpdate(task) {
        let tasks = this.state.tasks;
        tasks[task.index].isCompleted = task.isCompleted;
        this.setState({
            tasks
        });
        console.log('final task list after update', tasks);
    }

    render() {
        return (
            <div className="app panel-body">
                <div className="app-header">
                    <h2>TO-DO List App</h2>
                </div>
                <Form
                    onSubmit={this.onSubmit}
                />
                <List
                    tasks={this.state.tasks}
                    onUpdate={this.onUpdate}
                />
            </div>
        );
    }
}

export default Home;