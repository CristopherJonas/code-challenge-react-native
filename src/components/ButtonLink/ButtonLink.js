import React from 'react';
import {useNavigation} from '@react-navigation/native';

import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonLink = ({icon, text, navigateTo}) => {
  const navigation = useNavigation();
  return (
    <S.ButtonWrapper
      testID={'linkBtn' + icon}
      onPress={() => navigation.navigate(navigateTo)}>
      <Icon name={icon} size={45} color="#fff" />
      <S.ButtonText>{text}</S.ButtonText>
    </S.ButtonWrapper>
  );
};

export default ButtonLink;
