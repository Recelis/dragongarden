import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './menuItem';
import TakeAwayMenuItem from '../takeawaymenu/menuItem';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
});

describe('dine-in MenuItem', () => {
  it('renders number, name and price', () => {
    ReactDOM.render(<MenuItem itemNumber="1" itemName="Spring Rolls" itemPrice="9.50" />, container);
    expect(container.querySelector('.menu-item-number').textContent).toBe('1.');
    expect(container.querySelector('.menu-item-name').textContent).toBe('Spring Rolls');
    expect(container.querySelector('.menu-item-price').textContent).toBe('$9.50');
  });

  it('renders the tag only when provided', () => {
    ReactDOM.render(<MenuItem itemNumber="1" itemName="A" itemPrice="1" />, container);
    expect(container.querySelector('.badge')).toBeNull();

    ReactDOM.render(<MenuItem itemNumber="1" itemName="A" itemPrice="1" itemTag="GF" />, container);
    expect(container.querySelector('.badge').textContent).toBe('GF');
  });
});

describe('take away MenuItem', () => {
  it('renders without crashing and shows the item name', () => {
    ReactDOM.render(<TakeAwayMenuItem itemNumber="2" itemName="Fried Rice" itemPrice="12" />, container);
    expect(container.textContent).toContain('Fried Rice');
  });
});
