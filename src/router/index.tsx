/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import List from '@/views/List';
import Account from '@/views/Account';

import {CheckDataType, TabNavParamList, StackNavParamList} from '@/types';

const StackNav = createNativeStackNavigator<StackNavParamList>();
const TabNav = createBottomTabNavigator<TabNavParamList>();

const listTypes = Object.values(CheckDataType);

const iconMap = {
  [CheckDataType.Name]: {
    ['focused']: 'people-sharp',
    ['unfocused']: 'people-outline',
  },
  [CheckDataType.Address]: {
    ['focused']: 'link',
    ['unfocused']: 'link-outline',
  },
};

function TabRouter(): JSX.Element {
  return (
    <TabNav.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#52c41a',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarIcon({focused, color, size}) {
          const iconName =
            iconMap[route.name][focused ? 'focused' : 'unfocused'];
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}>
      {listTypes.map(name => (
        <TabNav.Screen
          name={name}
          key={name}
          component={List}
          initialParams={{type: name}}
        />
      ))}
    </TabNav.Navigator>
  );
}

export default function Router(): JSX.Element {
  return (
    <StackNav.Navigator
      initialRouteName="List"
      screenOptions={{
        headerTitle: '凝雪密境',
        headerStyle: {
          backgroundColor: '#abcdef',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackVisible: false,
      }}>
      <StackNav.Screen name="Account" component={Account} />
      <StackNav.Screen name="List" component={TabRouter} />
    </StackNav.Navigator>
  );
}
