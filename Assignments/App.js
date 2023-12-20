import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './reducers';
import TodoList from './TodoList';

const store = createStore(todoReducer);

export default function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
