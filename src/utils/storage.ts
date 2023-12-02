import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStoreData = async <V extends object>(key: string, value: V) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('set store data fail: ', e);
  }
};

export const getStoreData = async <V extends object>(
  key: string,
): Promise<V> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue) {
      return JSON.parse(jsonValue);
    }
    return {} as V;
  } catch (e) {
    console.error('get store data fail: ', e);
    return {} as V;
  }
};
