import { render, screen } from '@testing-library/react-native';
import TodoItem from './index';

describe('TodoItem', () => {
  const props = {
    todo: {
      id: 1,
      title: 'learn typescript',
      completed: true,
    },
    backgroundColor: '#eee',
  };
  test('should render content correctly', () => {
    render(<TodoItem {...props} />);
    expect(screen.getByText(props.todo.title)).toBeVisible();
    expect(screen.getByText(props.todo.title)).toHaveStyle({
      color: 'black',
    });
  });

  test('should match snapshot', () => {
    render(<TodoItem {...props} />);
    expect(screen.toJSON()).toMatchSnapshot();
  })
});

