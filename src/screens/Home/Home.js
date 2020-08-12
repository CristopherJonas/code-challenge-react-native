import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import CurrentBalance from '../../components/CurrentBalance/CurrentBalance';
import NameLogo from '../../components/NameLogo/NameLogo';
import {TransactionContext} from '../../Context';

import * as S from './styles';

const Home = () => {
  const {state} = useContext(TransactionContext);
  return (
    <S.HomeScreenWrapper>
      <SafeAreaView>
        <CurrentBalance balance={state.updatedBalance} />
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
