import SInfo from 'react-native-sensitive-info';

export async function savingData(key, val) {
  var data = await SInfo.setItem(key, val, {
    sharedPreferencesName: 'nezam',
    keychainService: 'Jco@123',
  });

  return data;
}

export async function gettingData(key) {
  var data = await SInfo.getItem(key, {
    sharedPreferencesName: 'nezam',
    keychainService: 'Jco@123',
  });

  return data;
}
