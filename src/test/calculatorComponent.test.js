import Calculator from "../components/calculator";
import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'

describe('Test calculator componet', () => {
    test('calculator display', () => {
        const document = render(<Calculator />)
    const display = document.container.querySelector('.solution')
        fireEvent.click(screen.getByText('5'))
        expect(display.textContent).toBe('5')
    })
    test('calculator display', () => {
        const document = render(<Calculator />)
    const display = document.container.querySelector('.solution')
        fireEvent.click(screen.getByText('AC'))
        expect(display.textContent).toBe('0')
    })
    test('calculator display', () => {
        const document = render(<Calculator />)
    const display = document.container.querySelector('.solution')
        fireEvent.click(screen.getByText('7'))
        fireEvent.click(screen.getByText('+/-'))
        expect(display.textContent).toBe('-7')
    })
})