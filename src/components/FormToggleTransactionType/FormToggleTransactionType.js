import React from 'react';
import {Switch} from 'react-native';
import transactionTypeEnum from '../../common/TransactionTypeEnum';

import * as S from './styles';
const FormToggleTransactionType = ({updateField, value}) => {
  const toggleSwitch = () => {
    updateField(
      value === transactionTypeEnum.INCREMENT
        ? transactionTypeEnum.DECREMENT
        : transactionTypeEnum.INCREMENT,
    );
  };
  return (
    <S.Wrapper>
      <S.DecrementText
        onPress={toggleSwitch}
        color={value === transactionTypeEnum.INCREMENT ? '#ccc' : '#d94343'}
        testID={'decrementText'}>
        Decrementar
      </S.DecrementText>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={
          value === transactionTypeEnum.INCREMENT ? '#436bd9' : '#d94343'
        }
        ios_backgroundColor="#ccc"
        onValueChange={toggleSwitch}
        value={value === transactionTypeEnum.INCREMENT}
        testID={'toggleButton'}
      />
      <S.IncrementText
        onPress={toggleSwitch}
        color={value === transactionTypeEnum.INCREMENT ? '#436bd9' : '#ccc'}
        testID={'incrementText'}>
        Incrementar
      </S.IncrementText>
    </S.Wrapper>
  );
};

export default FormToggleTransactionType;
