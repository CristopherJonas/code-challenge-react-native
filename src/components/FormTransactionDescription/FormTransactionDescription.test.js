import React from 'react';
import '@testing-library/jest-native';
import {render, waitFor} from '@testing-library/react-native';
import FormTransactionDescription from './FormTransactionDescription';

describe('New Transaction screen -> input Transaction description', () => {
  test('transaction description must be initialized with " "', async () => {
    const {getByTestId} = render(
      <FormTransactionDescription updateField={jest.fn((x) => x)} value={''} />,
    );

    await waitFor(() =>
      expect(getByTestId('descriptionInput').props.value).toBe(''),
    );
  });

  test('transaction description must be updated according to the value passed', async () => {
    const {getByTestId} = render(
      <FormTransactionDescription
        updateField={jest.fn((x) => x)}
        value={'test'}
      />,
    );

    await waitFor(() =>
      expect(getByTestId('descriptionInput').props.value).toBe('test'),
    );
  });

  test('transaction description must be max 50 characters', async () => {
    const {getByTestId} = render(
      <FormTransactionDescription
        updateField={jest.fn((x) => x)}
        value={'12345678901234567890123456789012345678901234567890'}
      />,
    );

    await waitFor(() =>
      expect(getByTestId('descriptionInput').props.maxLength).toBe(50),
    );
  });
});
