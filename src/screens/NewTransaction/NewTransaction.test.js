import React from 'react';
import '@testing-library/jest-native';
import {render, waitFor} from '@testing-library/react-native';
import NewTransaction from './NewTransaction';
import {useNavigation} from '@react-navigation/native';
import MockedNavigator from '../../../__mocks__/MockedNavigator';

describe('New Transaction screen', () => {
  test('Save Button must be disabled by default', async () => {
    // mocka screen
    // seleciona botão pelo testId
    // verifica se possui a cor cinza e propriedade disabled == true
  });
});
