/**
 * Created by pranay on 9/18/17.
 */
import React, { Component } from 'react';
import ListItem from './ListItem';
// import 'components.css';

class List extends Component {
    render() {
        return (
            <div className="task-list">
                <ul>
                    {
                        this.props.tasks.map((task, index) => {
                            return <ListItem key={index} task={task} onUpdate={this.props.onUpdate}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;
