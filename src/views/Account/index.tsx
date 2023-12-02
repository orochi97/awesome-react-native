import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
  View,
  Image,
  Text,
} from 'react-native';

import {windowWidth} from '@/const';
import {imageResources} from '@/const/resources';
import {Input, Button} from '@/components';

import {useSystemData} from '@/hooks';

import {CheckDataType} from '@/types';

import type {AccountCompProps} from '@/types';

function Account({navigation}: AccountCompProps): JSX.Element {
  const [sysData, setSysData] = useSystemData<InfoSysData>({
    [CheckDataType.Name]: '',
    [CheckDataType.Address]: '',
  });
  const [detaiData, setDetailData] = useState({
    name: '',
    address: '',
  });

  const nameHandle = useCallback(
    (name: string) => {
      setDetailData({
        ...detaiData,
        name,
      });
    },
    [detaiData],
  );

  const addressHandle = useCallback(
    (address: string) => {
      setDetailData({
        ...detaiData,
        address,
      });
    },
    [detaiData],
  );

  const saveHandle = useCallback(() => {
    if (!detaiData.name || !detaiData.address) {
      Alert.alert('Warn', 'Name and Address cannot be empty.', [
        {
          text: 'Cancel',
        },
      ]);
      return;
    }
    setSysData(detaiData).then(() => {
      Alert.alert('Success', 'Save successfully.', [
        {
          text: 'OK',
        },
      ]);
    });
  }, [detaiData, setSysData]);

  const toListHandle = useCallback(() => {
    navigation.navigate('List');
  }, [navigation]);

  useEffect(() => {
    setDetailData({
      name: sysData.name || 'default',
      address: sysData.address || 'default',
    });
  }, [sysData]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.headerImage} source={imageResources['24']} />
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.form}>
          <View style={styles.formItem}>
            <Text style={styles.formItemLabel}>Name:&nbsp;&nbsp;</Text>
            <Input value={detaiData.name} onChangeText={nameHandle} />
          </View>
          <View style={styles.formItem}>
            <Text style={styles.formItemLabel}>Address:&nbsp;&nbsp;</Text>
            <Input value={detaiData.address} onChangeText={addressHandle} />
          </View>
          <View style={styles.formItem}>
            <Button
              style={styles.formItemBtn}
              title="To List"
              type="success"
              onPress={toListHandle}
            />
            <Button title="Save" type="primary" onPress={saveHandle} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'WhiteSmoke',
    height: '100%',
  },
  headerImage: {
    width: windowWidth,
    height: windowWidth,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    margin: 20,
  },
  formItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  formItemLabel: {
    fontSize: 18,
    width: 80,
    textAlign: 'right',
  },
  formItemBtn: {
    marginRight: 40,
  },
});

export default Account;
