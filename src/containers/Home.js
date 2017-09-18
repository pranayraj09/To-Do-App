/**
 * Created by pranay on 9/17/17.
 */
import React, { Component } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import List from '../components/List';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.syncTasks = this.syncTasks.bind(this);
    }

    componentDidMount(){
        this.syncTasks();
    }

    syncTasks(){
        const SELF = this;
        fetch('http://quip-todos.herokuapp.com/get_todos?email=pranay@apple.com').then((res) => res.json()).then((data) => {
            console.log(data);
            SELF.setState({
                tasks: data
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    onSubmit(task) {

        let details = {
            'email': 'pranay@apple.com',
            'text': task,
            'completed': 'false'
        };

        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch("http://quip-todos.herokuapp.com/add_todo", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        });
        this.syncTasks();
    }

    onUpdate(task) {
        const formData = new FormData();
        formData.append('email', 'pranay@apple.com');
        formData.append('id', task.id);
        formData.append('completed', task.completed);
        fetch("http://quip-todos.herokuapp.com/mark_completed", {
            method: "POST",
            body: formData
        });
        this.syncTasks();
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