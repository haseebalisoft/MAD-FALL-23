import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from './actions';

const TodoList = ({ todos, addTodo, deleteTodo }) => {
  return (
    <View>
      <Button
        title="Add Todo"
        onPress={() => addTodo(`Task ${todos.length + 1}`)}
      />
      {todos.map((todo) => (
        <View key={todo.id}>
          <Text>{todo.text}</Text>
          <Button
            title="Delete"
            onPress={() => deleteTodo(todo.id)}
          />
        </View>
      ))}
    </View>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { addTodo, deleteTodo })(TodoList);
