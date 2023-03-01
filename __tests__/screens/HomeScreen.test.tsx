
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import HomeScreen from '../../screens/HomeScreen'

describe('Screen 1', () => {
  it('navigates on button press', () => {
    const navigate = jest.fn();
    const { getByText } = render(<HomeScreen navigation={{ navigate }} />)
    fireEvent.press(getByText('START QUIZ'))
    expect(navigate).toHaveBeenCalledWith('Quiz')
  });
});