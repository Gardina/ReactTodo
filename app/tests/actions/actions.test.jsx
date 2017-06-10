import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import  * as actions from 'actions';

let createMockStore = configureMockStore([thunk]);

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
      todo : {
        id: '122313123',
        text: 'dog the cat',
        completed: false,
        createdAt: 9090030
      }
    };
    let res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'lock the took';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done(); 
    }).catch(done);
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
