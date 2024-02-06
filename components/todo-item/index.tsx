import { Text, View } from 'react-native';
import { Todo } from '../../interfaces/todo';


interface TodoItemProps {
  backgroundColor: string;
  todo: Todo
}

export default function TodoItem(props: TodoItemProps) {
  return (
    <View
      style={{
        backgroundColor: props.backgroundColor,
        marginBottom: 8,
        width: '100%',
        padding: 8,
        borderRadius: 8,
      }}
    >
      <Text
        style={{
          color: 'black',
        }}
      >
        {props.todo.title}
      </Text>
    </View>
  );
}
