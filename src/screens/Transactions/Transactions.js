import React from 'react';
import {View, Text, FlatList} from 'react-native';
import TransactionCard from '../../components/TransactionCard/TransactionCard';

import * as S from './styles';

const data = [
  {
    id: 1,
    type: 'increment',
    value: 1985645615.55,
    description: 'transação sobre uhau asdasdioj açsdlasdç',
  },
  {
    id: 2,
    type: 'increment',
    value: 19856615.55,
    description: 'transação sobre uhau asdasdioj ',
  },
  {
    id: 3,
    type: 'decrement',
    value: 198615.55,
    description: 'transação sobre uhau ',
  },
  {
    id: 4,
    type: 'increment',
    value: 19815.55,
    description: 'transação sobre ',
  },
  {
    id: 5,
    type: 'decrement',
    value: 115.55,
    description: 'transação ',
  },
  {
    id: 6,
    type: 'decrement',
    value: 14.57,
    description: 'transação sobre uhau asdasdioj açsdlasdç',
  },
];

const Transactions = () => {
  return (
    <S.TransactionsScreenWrapper>
      <FlatList
        data={data}
        keyExtractor={(transaction) => transaction.id.toString()}
        renderItem={({item}) => (
          <TransactionCard
            type={item.type}
            description={item.description}
            value={item.value}
          />
        )}
      />
    </S.TransactionsScreenWrapper>
  );
};

export default Transactions;
