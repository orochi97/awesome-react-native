import React, {useEffect, useState, useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {getCheckData} from '@/api';

import {Loading, Button} from '@/components';

import {useSystemData} from '@/hooks';

import {CheckDataType, type ListCompProps} from '@/types';

function List(props: ListCompProps): JSX.Element {
  const [isLoading, setLoading] = useState(false);
  const [detaiData, setDetailData] = useState({
    images: [],
  });

  const [sysData, _, updateForce] = useSystemData<InfoSysData>({
    [CheckDataType.Name]: '',
    [CheckDataType.Address]: '',
  });

  const toAccountHandle = useCallback(() => {
    props.navigation.navigate('Account');
  }, [props.navigation]);

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      updateForce();
      setLoading(true);
      getCheckData({}).then(res => {
        setDetailData(() => {
          return {
            images: res.data.sort(function () {
              return Math.random() - 0.5;
            }),
          };
        });
        setLoading(false);
      });
    });
  }, [props.navigation, updateForce]);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.label}>
          <Text style={styles.labelText}>
            {sysData[props.route.name] || props.route.name}
          </Text>
        </View>
        <View style={styles.list}>
          {detaiData.images.map((src, index) => (
            <Image style={styles.image} source={src} key={index} />
          ))}
        </View>
        <View style={styles.footer}>
          <Button title="ToAccount" type="primary" onPress={toAccountHandle} />
        </View>
      </ScrollView>
      <Loading loading={isLoading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'WhiteSmoke',
    height: '100%',
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: 110,
    height: 110,
    borderWidth: 4,
    borderColor: '#abcdef',
    borderRadius: 8,
    marginBottom: 8,
  },
  label: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    margin: 20,
    padding: 20,
  },
  labelText: {
    fontSize: 18,
  },
  footer: {
    margin: 20,
  },
});

export default List;
