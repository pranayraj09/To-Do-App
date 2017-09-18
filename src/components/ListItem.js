/**
 * Created by pranay on 9/17/17.
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
    //
    // render() {
    //     let text = (<span className="form-control"> <input type="checkbox"/>{this.props.task.text}</span>);
    //     if (this.state.completed) {
    //         text = (<del className="form-control"> <input type="checkbox"/> {this.props.task.text}</del>);
    //     }
    //     return (
    //         <li>
    //             <input type="checkbox" className="checkbox" onChange={this.onChange} checked={this.state.completed} /> {text}
    //         </li>
    //     );
    // }

    render() {
        let text = (<label> <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span> <p><input type="checkbox" onChange={this.onChange} checked={this.state.completed}/> {this.props.task.text}</p></label>);
        if (this.state.completed) {
            text = (<label><input type="checkbox" onChange={this.onChange} checked={this.state.completed}/> <span className="cr"><i className="cr-icon glyphicon glyphicon-ok"></i></span> <del> {this.props.task.text}</del></label>);
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
