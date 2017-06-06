import expect from 'expect';

import  * as actions from 'actions';

describe('actions', () => {
  it('should generate search text action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some search text'
    };
    let res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('shoud generate addtodo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'some todo'
    };
    let res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate add todos action object', () => {
    let todos = [{
      id: '111',
      text: 'some text',
      completed: false,
      completedAt: undefined,
      createdAt: 33333333
    }];
    let action = {
      type: 'ADD_TODOS',
      todos
    }

    let res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    let res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: 122
    };
    let res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
