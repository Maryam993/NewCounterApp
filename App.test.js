import { toHaveTextContent } from '@testing-library/jest-native'
import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import App from '../App'
expect.extend({ toHaveTextContent })

describe('<App />', () => {
  test('Increment button is Working', () => {
    const view = render(<App />)
    const button1 = view.getByTestId('myButton')
    const counter = view.getByTestId('myValue')

    const startingValue = Number.parseInt(counter.children[0])

    fireEvent.press(button1)

    console.log(counter.children)
    expect(counter).toHaveTextContent(startingValue + 1)
  })

  test('Decrement button is working', () => {
    const view = render(<App />)

    const button2 = view.getByTestId('myButton2')
    const counter = view.getByTestId('myValue')

    const startingValue = Number.parseInt(counter.children[0])

    fireEvent.press(button2)

    console.log(counter.children)
    expect(counter).toHaveTextContent(startingValue)
  })
})
