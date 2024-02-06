import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface FormTodoProps {
  onSubmit: (todo: string) => void;
}

export default function FormTodo(props: FormTodoProps) {
  const [inputTodo, setInputTodo] = React.useState('');

  return (
    <View
      style={{
        marginBottom: 8,
        flexDirection: 'column',
        flexWrap: 'wrap',
      }}
    >
      <TextInput
        value={inputTodo}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 8,
          borderRadius: 8,
          marginBottom: 8,
        }}
        onChangeText={(e) => setInputTodo(e)}
        placeholder="write your todo here..."
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#DDDDDD',
          padding: 8,
          borderRadius: 8,
          marginBottom: 8,
          width: '100%',
        }}
        onPress={() => props.onSubmit(inputTodo)}
      >
        <Text style={{ textAlign: 'center', color: 'black' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
