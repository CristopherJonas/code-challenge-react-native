import React from 'react';

import * as S from './styles';

const NameLogo = () => {
  return (
    <S.LogoWrapper>
      <S.Logo
        source={require('../../assets/images/magnetis-logo.jpg')}
        resizeMode="contain"
        testID={'logo'}
      />
    </S.LogoWrapper>
  );
};

export default NameLogo;
