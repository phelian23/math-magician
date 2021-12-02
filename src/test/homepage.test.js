import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import Homepage from '../components/homepage';

describe('Test Homepage', () => {
  test('display', () => {
    render(<Homepage />);
    const display = screen.getByRole('heading');
    expect(display.textContent).toBe('Welcome to our page!');
  });
});
