import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import CurrentBalance from '../../components/CurrentBalance/CurrentBalance';
import NameLogo from '../../components/NameLogo/NameLogo';
import {getData} from '../../database/database';
import {MaskService} from 'react-native-masked-text';

import * as S from './styles';
import transactionTypeEnum from '../../common/TransactionTypeEnum';

const Home = () => {
  const [balance, setBalance] = useState('0');
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      debugger;
      setBalance('19,90');
      //getTotalBalance(result);
    };
    fetchData();
  }, []);

  const getTotalBalance = (transactions) => {
    // let storedBalance = 0;
    // transactions.forEach((element) => {
    //   if (element.type === transactionTypeEnum.INCREMENT) {
    //     storedBalance =
    //       storedBalance + MaskService.toRawValue('money', element.value);
    //   } else {
    //     storedBalance =
    //       storedBalance - MaskService.toRawValue('money', element.value);
    //   }
    // });
    //setBalance('19,90');
  };

  return (
    <S.HomeScreenWrapper>
      <SafeAreaView>
        <NameLogo />
        <CurrentBalance balance={balance} />
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
