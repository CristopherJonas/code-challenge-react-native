import React, {useState} from 'react';
import {Switch} from 'react-native';

import * as S from './styles';
const FormToggleTransactionType = () => {
  const [isIncrement, setIsIncrement] = useState(false);
  const toggleSwitch = () => setIsIncrement((previousState) => !previousState);
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
