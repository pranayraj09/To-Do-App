/**
 * Created by pranay on 9/17/17.
 */
import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCompleted: this.props.task.isCompleted
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        const isCompleted = !this.state.isCompleted;
        this.setState({ isCompleted });
        this.props.onUpdate({
            isCompleted,
            index: this.props.index
        });
    }

    render() {
        let text = (<span className="form-control">{this.props.task.title}</span>);
        if (this.state.isCompleted) {
            text = (<del className="form-control">{this.props.task.title}</del>);
        }
        return (
            <li>
                <input type="checkbox" className="checkbox" onChange={this.onChange} checked={this.state.isCompleted} /> {text}
            </li>
        );
    }
}

export default ListItem;
