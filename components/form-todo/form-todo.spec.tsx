import { act, render, screen, userEvent } from '@testing-library/react-native';
import FormTodo from './index';

describe('FormTodo', () => {
  const props = {
    onSubmit: jest.fn(),
  };

  const inputPlaceholder = 'write your todo here...';

  test('should render content correctly', () => {
    render(<FormTodo {...props} />);
    expect(screen.getByText('Submit')).toBeVisible();
    expect(screen.getByPlaceholderText(inputPlaceholder)).toBeVisible();
  });

  test('submit and call onSubmit function', async () => {
    const todoTitle = 'my todo';
    const event = userEvent.setup();
    jest.useFakeTimers();
    render(<FormTodo {...props} />);

    const inputTodo = screen.getByPlaceholderText(inputPlaceholder);
    await event.type(inputTodo, todoTitle);
    expect(inputTodo).toHaveProp('value', todoTitle);
    const btnSubmit = screen.getByText('Submit');
    await event.press(btnSubmit);
    expect(props.onSubmit).toHaveBeenCalledWith(todoTitle);
    jest.useRealTimers();
  });

  test('should match snapshot', () => {
    render(<FormTodo {...props} />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});

