
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import HomeScreen from '../../screens/HomeScreen'

describe('HomeScreen', () => {
  it('navigates to the quiz on button press', () => {
    // Arrange
    const navigate = jest.fn()

    // Act
    const homeScreen = render(<HomeScreen navigation={{ navigate }} />)
    fireEvent.press(homeScreen.getByText('START QUIZ'))

    // Assert
    expect(homeScreen).toMatchSnapshot()
    expect(navigate).toHaveBeenCalledWith('Quiz')
  })
})  