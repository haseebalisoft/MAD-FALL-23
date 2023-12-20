// actions.js
let nextId = 0;

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: {
    id: nextId++,
    text,
  },
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: id,
});
