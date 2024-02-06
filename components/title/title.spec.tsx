import { render, screen } from '@testing-library/react-native';
import Title from './index';

describe('Title', () => {
  const content = 'Todo App!';

  test('should render content correctly', () => {
    render(<Title>{content}</Title>);
    expect(screen.getByText(content)).toBeVisible();
  });

  test('should the text content in center', () => {
    render(<Title>{content}</Title>);

    expect(screen.getByText(content)).toHaveStyle({
      textAlign: 'center',
    });
  });

  test('should match snapshot', () => {
    render(<Title>{content}</Title>);
    // https://jestjs.io/docs/snapshot-testing
    expect(screen.toJSON()).toMatchSnapshot();
  })
});

