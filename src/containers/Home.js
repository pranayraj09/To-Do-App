/**
 * Created by pranay on 9/18/17.
 */
import React, { Component } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import List from '../components/List';
import './main.css';

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
            'text': task
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

        let details = {
            'email': 'pranay@apple.com',
            'id': task.id,
            'completed': task.completed
        };

        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        fetch("http://quip-todos.herokuapp.com/mark_completed", {
            method: "POST",
            body: formBody,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        this.syncTasks();
    }

    render() {
        return (
            <div className="app panel-body container col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 jumbotron">
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