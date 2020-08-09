import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();

import * as S from './styles';

const CurrentBalance = ({balance}) => {
  const [balanceValue, setBalanceValue] = useState(balance);
  const [iconEye, setIconEye] = useState('eye-slash');

  const hideShowBalance = () => {
    if (balanceValue !== '######') {
      setBalanceValue('######');
      setIconEye('eye');
    } else {
      setBalanceValue(balance);
      setIconEye('eye-slash');
    }
  };
  return (
    <S.CurrentBalanceWrapper>
      <S.CurrentBalanceText>Seu saldo atual é</S.CurrentBalanceText>
      <View style={{flexDirection: 'row'}}>
        <S.CurrentBalanceValue testID={'balanceValue'}>
          {balanceValue}
        </S.CurrentBalanceValue>
        <S.ShowHideBalanceButton
          onPress={() => hideShowBalance()}
          testID={'eyeButton'}>
          <Icon name={iconEye} size={45} color="#1c2124" />
        </S.ShowHideBalanceButton>
      </View>
    </S.CurrentBalanceWrapper>
  );
};

export default CurrentBalance;
