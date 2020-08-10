import React, {useState, useEffect} from 'react';
import transactionTypeEnum from './common/TransactionTypeEnum';
import {storeData, getData, removeValue} from './database/database';

const initialState = {
  transactions: [],
  updatedBalance: 0,
};

export const TransactionContext = React.createContext({
  state: initialState,
});

export const Context = (props) => {
  const [state, _setState] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      if (result) {
        _setState(result);
      }
    };
    fetchData();
  }, []);

  const updateTransactions = (newtransaction) => {
    let updatedTransactionsList = state.transactions;
    updatedTransactionsList.unshift(newtransaction);

    let newBalance = state.updatedBalance;
    if (newtransaction.type === transactionTypeEnum.INCREMENT) {
      newBalance = newBalance + newtransaction.value;
    } else {
      newBalance = newBalance - newtransaction.value;
    }

    const newState = {
      transactions: updatedTransactionsList,
      updatedBalance: newBalance,
    };
    _setState(newState);
    storeData(newState);
  };

  return (
    <TransactionContext.Provider
      value={{state, updateTransactions: updateTransactions}}>
      {props.children}
    </TransactionContext.Provider>
  );
};
