import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();

import * as S from './styles';

const ButtonLink = ({icon, text, navigateTo}) => {
  const navigation = useNavigation();
  return (
    <S.ButtonWrapper onPress={() => navigation.navigate(navigateTo)}>
      <Icon name={icon} size={45} color="#fff" />
      <S.ButtonText>{text}</S.ButtonText>
    </S.ButtonWrapper>
  );
};

export default ButtonLink;
