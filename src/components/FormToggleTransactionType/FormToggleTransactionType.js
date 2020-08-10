import React, {useState} from 'react';
import {Switch} from 'react-native';
import transactionTypeEnum from '../../common/TransactionTypeEnum';

import * as S from './styles';
const FormToggleTransactionType = ({getTransactionFields}) => {
  const [isIncrement, setIsIncrement] = useState(false);
  getTransactionFields(
    'type',
    isIncrement ? transactionTypeEnum.INCREMENT : transactionTypeEnum.DECREMENT,
  );
  const toggleSwitch = () => {
    setIsIncrement((previousState) => !previousState);
    getTransactionFields(
      'type',
      !isIncrement
        ? transactionTypeEnum.INCREMENT
        : transactionTypeEnum.DECREMENT,
    );
  };
  return (
    <S.Wrapper>
      <S.DecrementText
        onPress={toggleSwitch}
        color={isIncrement ? '#ccc' : '#d94343'}
        testID={'decrementText'}>
        Decrementar
      </S.DecrementText>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isIncrement ? '#436bd9' : '#d94343'}
        ios_backgroundColor="#ccc"
        onValueChange={toggleSwitch}
        value={isIncrement}
        testID={'toggleButton'}
      />
      <S.IncrementText
        onPress={toggleSwitch}
        color={isIncrement ? '#436bd9' : '#ccc'}
        testID={'incrementText'}>
        Incrementar
      </S.IncrementText>
    </S.Wrapper>
  );
};

export default FormToggleTransactionType;
