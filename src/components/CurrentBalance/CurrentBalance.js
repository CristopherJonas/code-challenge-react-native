import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MaskService} from 'react-native-masked-text';

import * as S from './styles';

const CurrentBalance = ({balance}) => {
  const [showBalance, setShowBalance] = useState(true);
  const [iconEye, setIconEye] = useState('eye-slash');

  const hideShowBalance = () => {
    if (showBalance) {
      setShowBalance(false);
      setIconEye('eye');
    } else {
      setShowBalance(true);
      setIconEye('eye-slash');
    }
  };
  return (
    <S.CurrentBalanceWrapper>
      <S.CurrentBalanceText>Seu saldo atual é</S.CurrentBalanceText>
      <View style={{flexDirection: 'row'}}>
        <S.CurrentBalanceValue testID={'balanceValue'}>
          {showBalance
            ? MaskService.toMask('money', balance, {
                unit: balance >= 0 ? 'R$' : 'R$-',
                separator: ',',
                delimiter: '.',
              })
            : '######'}
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
