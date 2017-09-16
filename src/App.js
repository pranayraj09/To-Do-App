import React  from 'react';
import ReactDOM from 'react-dom';

import './App.css';

class TodoApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    updateItems(newItem){
        var allItems = this.state.items.concat([newItem]);
        this.setState({items: allItems});
    }

    render() {
    return (
        <div>
            <TodoBanner/>
            <TodoForm onFormSubmit={this.updateItems}/>
            <TodoList items={this.state.items}/>
        </div>
    );
  }
}

class TodoBanner extends React.Component{
    render(){
        return(
            <h3>Todo App for Quip</h3>
        )
    }

}

class TodoList extends React.Component{
    render(){
        let createItem = function(itemText) {
            return (
                <TodoListItem>{itemText}</TodoListItem>
            );
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
}

class TodoListItem extends React.Component{
    render(){
        return (
            <li data-id={this.props.value} key={this.props.value}>{this.props.children}</li>
        );
    }
}

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: ''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onFormSubmit(this.state.item);
        this.setState({item: ''});
        ReactDOM.findDOMNode(this.refs.item).focus();
        return;
    }

    onChange(e){
        this.setState({
            item: e.target.value
        });
    }

    render(){
        return(
            <div className="row">
                <form  onSubmit={this.handleSubmit}>
                    <div className="form-group col-sm-10">
                        <input type='text' className="todoField form-control"  ref='item' onChange={this.onChange} value={this.state.item}/>
                        <input type='submit' className="btn btn-default" style={{"float":"left","marginLeft":"5px"}} value='Add'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoApp;

















