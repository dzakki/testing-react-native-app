import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import axios from 'axios';
import Title from '../components/title';
import FormTodo from '../components/form-todo';
import TodoItem from '../components/todo-item';
import { Todos } from '../interfaces/todo';
import { TODOS } from './constants';


export default function Home() {
  const [todos, setTodos] = React.useState(TODOS);

  React.useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/2/todos')
      .then((response) => setTodos(response.data as Todos))
      .catch(console.error);
  }, []);

  const addTodo = (payload: string) => {
    setTodos([
      {
        id: new Date().getTime(),
        title: payload,
        completed: false,
      },
      ...todos,
    ]);
  };

  return (
    <>
      <View
        style={{
          paddingTop: 16,
          width: 300,
        }}
      >
        <Title>Todo App!</Title>
        <FormTodo onSubmit={addTodo} />
      </View>
      <ScrollView
        style={{
          paddingVertical: 16,
          width: 300,
        }}
      >
        <FlatList
          data={todos}
          renderItem={({ item, index }) => (
            <TodoItem
              backgroundColor={index % 2 === 0 ? '#eee' : '#f9f9f9'}
              key={item.id}
              todo={item}
            />
          )}
        />
      </ScrollView>
    </>
  );
}

