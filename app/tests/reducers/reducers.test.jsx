const expect = require('expect');
const df = require('deep-freeze-strict');

const reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      let res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });

    describe('showCompletedReducer', () => {
      it('should toggle shocompleted', () => {
        let action = {
          type: 'TOGGLE_SHOW_COMPLETED'
        };
        let res = reducers.showCompletedReducer(df(false), df(action));

        expect(res).toBe(true);
      });
    });

    describe('todosReducer', () => {
      it('should add new todo', () => {
        let action = {
          type: 'ADD_TODO',
          todo: {
            id: 'asdfls',
            text: 'walk the duck',
            completed: false,
            createdAt: 123443
          }
        };
        let res = reducers.todosReducer(df([]), df(action));

        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(action.todo);
      });

      it('should toggle todo', () => {
        let action = {
          type: 'TOGGLE_TODO',
          id: '1'
        }
        let todos = [{
          text: 'walk the cat',
          id: '1',
          completed: false,
          createdAt: 13434124,
          completedAt: undefined
        }];
        let res = reducers.todosReducer(df(todos), df(action));

        expect(res[0].completed).toBe(true);
        expect(res[0].completedAt).toBeA('number');
      });

      it('should add existing todos', () => {
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
        let res = reducers.todosReducer(df([]), df(action));

        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(todos[0]);
      });
    });
  });
});
