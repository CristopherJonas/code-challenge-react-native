import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './screens/Home/Home';
import NewTransaction from './screens/NewTransaction/NewTransaction';
import Transactions from './screens/Transactions/Transactions';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false, title: 'Início'}}
        />
        <Stack.Screen
          name="NewTransaction"
          component={NewTransaction}
          options={{title: 'Nova Transação'}}
        />
        <Stack.Screen
          name="Transactions"
          component={Transactions}
          options={{title: 'Lista de Transações'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
