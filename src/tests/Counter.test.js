import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  // render counter
  render(<Counter />);
});

test('renders counter message', () => {
  //  getByRole to locate the heading 
  const counterMessage = screen.getByRole('heading', { name: /counter/i });
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  //  getByText to locate  count element directly
  const initialCountElement = screen.getByText("0");
  expect(initialCountElement).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // getByRole to locate the increment button
  const incrementButton = screen.getByRole('button', { name: '+' });
  fireEvent.click(incrementButton);

  //  getByTestId to locate the count element by its test ID
  const updatedCount = screen.getByTestId("count");
  expect(updatedCount).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // getByText to locate the decrement button
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);

  // Using getByTestId to locate the count element by its test ID
  const updatedCount = screen.getByTestId("count");
  expect(updatedCount).toHaveTextContent("-1");
});
