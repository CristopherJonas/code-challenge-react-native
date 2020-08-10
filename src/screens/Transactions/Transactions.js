import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import TransactionCard from '../../components/TransactionCard/TransactionCard';
import {getData} from '../../database/database';

import * as S from './styles';

const Transactions = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <S.TransactionsScreenWrapper>
      {data.length > 0 && (
        <FlatList
          data={data}
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
      {data.length === 0 && (
        <S.NoTransactionsSavedText>
          Nenhuma transação salva
        </S.NoTransactionsSavedText>
      )}
    </S.TransactionsScreenWrapper>
  );
};

export default Transactions;
