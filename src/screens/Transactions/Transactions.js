import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import TransactionCard from '../../components/TransactionCard/TransactionCard';
import {TransactionContext} from '../../Context';

import * as S from './styles';

const Transactions = () => {
  const {state} = useContext(TransactionContext);

  return (
    <S.TransactionsScreenWrapper>
      {state.transactions.length > 0 && (
        <FlatList
          data={state.transactions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TransactionCard
              type={item.type}
              description={item.description}
              value={item.value}
            />
          )}
        />
      )}
      {state.transactions.length === 0 && (
        <S.NoTransactionsSavedText>
          Nenhuma transação salva
        </S.NoTransactionsSavedText>
      )}
    </S.TransactionsScreenWrapper>
  );
};

export default Transactions;
