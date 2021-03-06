const $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  filterTodos: function(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    //filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      return todo.text.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    });
    //sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.comleted) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
