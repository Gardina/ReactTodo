const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one todo comp for each todo item', () => {
    const todos = [{
      id: 1,
      text: 'read coor'
    }, {
      id: 2,
      text: 'check maid'
    }];
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    let todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todoComponents.lenght).toBe(todos.lenght);
  });

  it('should render empty message if no todos', () => {
    const todos = [];
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    let $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
