
import React from 'react'
import { render } from '@testing-library/react-native'

import QuizScreen from '../../screens/QuizScreen'

describe('QuizScreen', () => {
  it('renders correctly', () => {
    // Arrange
    const navigate = jest.fn()

    // Act
    const quizScreen = render(<QuizScreen navigation={{ navigate }} />)
    const timer = quizScreen.getByTestId('quiz-timer')
    const title = quizScreen.getByTestId('quiz-title')

    // Assert
    expect(quizScreen).toMatchSnapshot()
    expect(timer).toBeDefined()
    expect(title).toBeDefined()
  })
})
