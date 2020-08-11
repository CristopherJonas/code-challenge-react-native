import React from 'react';
import '@testing-library/jest-native';
import {render, waitFor} from '@testing-library/react-native';
import Home from './Home';
import {useNavigation} from '@react-navigation/native';

//mocking react-navigation and its modulels
jest.mock('@react-navigation/native', () => {
  return {
    createNavigatorFactory: jest.fn(),
    useNavigation: jest.fn(),
  };
});
jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(),
}));

describe('Home screen', () => {
  test('Should render properly', async () => {
    const {getByTestId} = render(<Home />);

    await waitFor(
      () => expect(getByTestId('logo')).not.toBeNull(),
      expect(getByTestId('balanceValue')).not.toBeNull(),
      expect(getByTestId('linkBtnlist')).not.toBeNull(),
    );
  });
});
