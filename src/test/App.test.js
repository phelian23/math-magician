import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';

describe('Full website testing ', () => {
  test('Home ', () => {
    render(<Router><App /></Router>);
    fireEvent.click(screen.getByText('Home'));
    const text = screen.getByText('Welcome to our page!');

    expect(text).toBeInTheDocument();
  });

  test('Quote', () => {
    render(<Router><App /></Router>);
    fireEvent.click(screen.getByText('Quote'));
    const text = screen.getByText(/William Paul Thurston/i);

    expect(text).toBeInTheDocument();
  });

  test('Calculator', () => {
    render(<Router><App /></Router>);
    fireEvent.click(screen.getByText('Calculator'));
    const text = screen.getByText("Let's do some Math!");

    expect(text).toBeInTheDocument();
  });
});
