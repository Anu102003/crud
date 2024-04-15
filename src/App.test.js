import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import AddUserComponent from '../src/components/AddUserComponent'
import { BrowserRouter } from 'react-router-dom';
import ListUserComponent from './components/ListUserComponent';

test('Validate the App', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
test('Validate the Email', () => {
  render(
    <BrowserRouter>
      <AddUserComponent />
    </BrowserRouter>
  );
  const email = screen.getByPlaceholderText("Enter email Id");
  fireEvent.change(email, { target: { value: 'anu@gmai' } });
  const result = screen.getByText('Enter valid Email');
  expect(result).toBeInTheDocument();
});
test('Validate the FirstName', () => {
  render(
    <BrowserRouter>
      <AddUserComponent />
    </BrowserRouter>
  );
  const firstName = screen.getByPlaceholderText("Enter first name");
  fireEvent.change(firstName, { target: { value: 'anu334s' } });
  const result = screen.getByText('Only alphabets are allowed.');
  expect(result).toBeInTheDocument();
});

test('Validate the LastName', () => {
  render(
    <BrowserRouter>
      <AddUserComponent />
    </BrowserRouter>
  );
  const lastName = screen.getByPlaceholderText("Enter last name");
  fireEvent.change(lastName, { target: { value: 'anu334s' } });
  const result = screen.getByText('Only alphabets are allowed.');
  expect(result).toBeInTheDocument();
});
test('Validate the Mobile Number', () => {
  render(
    <BrowserRouter>
      <AddUserComponent />
    </BrowserRouter>
  );
  const mobile = screen.getByPlaceholderText("Enter Mobile Number");
  fireEvent.change(mobile, { target: { value: '334a' } });
  const result = screen.getByText('Enter valid Mobile Number');
  expect(result).toBeInTheDocument();
});
test('Validate the Mobile Number', () => {
  render(
    <BrowserRouter>
      <AddUserComponent />
    </BrowserRouter>
  );
  const mobile = screen.getByPlaceholderText("Enter Mobile Number");
  fireEvent.change(mobile, { target: { value: '334' } });
  const result = screen.getByText('Please enter 10 digit number');
  expect(result).toBeInTheDocument();
});

test('button', () => {
  render(
    <BrowserRouter>
      <ListUserComponent />
    </BrowserRouter>
  );
  const btn = screen.getByTestId('add');
  fireEvent.click(btn)
  const result = screen.getByTestId('add');
  expect(result).toBeInTheDocument();
});
