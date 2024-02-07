import axios from 'axios';
import { act, fireEvent, render, screen, userEvent, waitFor } from '@testing-library/react-native';
import Home from '../screens/home';
import { TODOS } from './constants';

jest.mock('axios');

// https://stackoverflow.com/a/53204714
const mockedAxios = axios as jest.Mocked<typeof axios>;

const renderApp = () => {
  mockedAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: TODOS,
    })
  );
  return render(<Home />);
};

describe('Home', () => {
  test('should render content correctly', () => {
    renderApp();

    expect(screen.getByText(TODOS[0].title)).toBeVisible();
    expect(screen.getByText('Todo App!')).toBeVisible();
    expect(screen.getByPlaceholderText('write your todo here...')).toBeVisible();
    expect(screen.getByText('Submit')).toBeVisible();
  });

  test('should add new todo', async () => {
    const event = userEvent.setup();
    jest.useFakeTimers();
    renderApp();

    const inputTodo = screen.getByPlaceholderText('write your todo here...');
    const inputValue = 'learn jest';
    await event.type(inputTodo, inputValue);
    expect(inputTodo).toHaveDisplayValue(inputValue);
    await event.press(screen.getByText('Submit'));

    // helper function from @testing-library/react-native. https://callstack.github.io/react-native-testing-library/docs/api/#helper-functions
    waitFor(() => expect(screen.getByText(inputValue)).toBeVisible());
    jest.useRealTimers();
  });

  test('should match snapshot', () => {
    renderApp();
    expect(screen.toJSON()).toMatchSnapshot();
  })
});

