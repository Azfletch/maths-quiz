import React from 'react'
import { render } from '@testing-library/react-native'

import TenFrame from '../../components/TenFrame'

import questions from '../../data/questions'

test('Tenframe renders correctly', () => {
  // Arrange
  const [question] = questions

  // Act
  const tenFrame = render(<TenFrame question={question} />)

  // Assert
  expect(tenFrame).toMatchSnapshot()
})