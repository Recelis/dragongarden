import React from 'react';
import ReactDOM from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import App from './App';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<App />, container);
  });
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
});

const buttons = () => Array.from(container.querySelectorAll('.menu-toggle-bar button'));

it('renders without crashing', () => {
  expect(container.querySelector('.App')).not.toBeNull();
});

it('shows the take away menu by default', () => {
  const [takeaway, dinein] = buttons();
  expect(takeaway.className).toContain('active');
  expect(dinein.className).not.toContain('active');
  expect(container.textContent).not.toContain('Enjoy the atmosphere');
});

it('toggles between take away and dine-in menus', () => {
  act(() => {
    Simulate.click(buttons()[1]);
  });
  expect(buttons()[1].className).toContain('active');
  expect(buttons()[0].className).not.toContain('active');
  expect(container.textContent).toContain('Enjoy the atmosphere');

  act(() => {
    Simulate.click(buttons()[0]);
  });
  expect(buttons()[0].className).toContain('active');
  expect(container.textContent).not.toContain('Enjoy the atmosphere');
});
