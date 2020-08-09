import React from 'react';
import '@testing-library/jest-native';
import {render, waitFor} from '@testing-library/react-native';
import TransactionCard from './TransactionCard';
import transactionTypeEnum from '../../common/TransactionTypeEnum';

describe('Transaction List screen -> Transaction Card', () => {
  test('When type is INCREMENT, value background color must be blue(#436bd9)', async () => {
    const {getByTestId} = render(
      <TransactionCard
        type={transactionTypeEnum.INCREMENT}
        description={'some great description'}
        value={198.55}
      />,
    );

    await waitFor(() =>
      expect(getByTestId('transactionCardIcon')).toHaveStyle({
        color: '#436bd9',
      }),
    );
  });

  test('When type is DECREMENT, value background color must be red(#d94343)', async () => {
    const {getByTestId} = render(
      <TransactionCard
        type={transactionTypeEnum.DECREMENT}
        description={'some great description'}
        value={198.55}
      />,
    );

    await waitFor(() =>
      expect(getByTestId('transactionCardIcon')).toHaveStyle({
        color: '#d94343',
      }),
    );
  });
});
