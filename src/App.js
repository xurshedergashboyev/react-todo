import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

var randomId = require('random-id');
 
// length of the id (default is 30)
var len = 30;
 
// pattern to determin how the id will be generated
// default is aA0 it has a chance for lowercased capitals and numbers
var pattern = 'aA0'
 


class App extends Component {
  state = {
    items: [],
    id: randomId(len, pattern),
    item: '', 
    editItem: false
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem]

    this.setState({
      items: updatedItems,
      item: '',
      id: randomId(len, pattern),
      editItem: false
    })
  }



  clearList = () => {
    console.log('clear list')
  }
  handleDelete = (id) => {
    console.log('handle edit')
  }
  handleEdit = (id) => {
    console.log('handle edit')
  }

  render() { 
    console.log(this.state)
    return ( 
      <div className="container">
        <div className="row">
          <div className="c0l-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
            item={this.state.item} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} 
            editItem={this.state.editItem} 
            />
            <TodoList 
            items={this.state.items} 
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit} 
            />

          </div>
        </div>
      </div>
     );
  }
}
 
export default App;