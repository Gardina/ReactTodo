const React = require('react');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo')

const TodoApp = React.createClass({

  getInitialState: function(){
    return{
      todos: [
        {
          id: 1,
          text: 'walk the f dog'
        }, {
          id: 2,
          text: 'clean the shits'
        }, {
          id: 3,
          text: 'eat some shit'
        }, {
          id: 4,
          text: 'sleep ....... '
        }
      ]
    }
  },

  handleAddTodo: function(text) {
    alert('new todo' + text)
  },
  render: function() {
    let {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
