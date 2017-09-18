/**
 * Created by pranay on 9/18/17.
 */
import React, { Component } from 'react';
import './components.css';


class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: this.props.task.completed
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        const completed = !this.state.completed;
        this.setState({ completed });
        this.props.onUpdate({
            completed,
            id: this.props.task.id
        });
    }
    render() {
        let text = (
            <label>
                <p>
                    <input type="checkbox" onChange={this.onChange} checked={this.state.completed}/>
                    <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                    {this.props.task.text}
                </p>
            </label>
        );
        if (this.state.completed) {
            text = (
                <label>
                    <del>
                        <input type="checkbox" onChange={this.onChange} checked={this.state.completed}/>
                        <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span>
                        {this.props.task.text}
                    </del>
                </label>
            );
        }
        return (
            <li>
                <div className="checkbox">
                    {text}
                </div>
            </li>
        );
    }
}

export default ListItem;
