import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import CurrentBalance from '../../components/CurrentBalance/CurrentBalance';
import NameLogo from '../../components/NameLogo/NameLogo';
import * as S from './styles';

const Home = () => {
  return (
    <S.HomeScreenWrapper>
      <SafeAreaView>
        <NameLogo />
        <CurrentBalance balance={'19,90'} />
        <S.ButtonsWrapper>
          <ButtonLink
            icon={'list'}
            text={'Mostrar lista'}
            navigateTo={'Transactions'}
          />
          <ButtonLink
            icon={'plus'}
            text={'Nova operação'}
            navigateTo={'NewTransaction'}
          />
        </S.ButtonsWrapper>
      </SafeAreaView>
    </S.HomeScreenWrapper>
  );
};

export default Home;
