import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('transactions', jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('transactions');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('transactions');
  } catch (e) {
    // remove error
  }
  console.log('Done.');
};
