import type {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {CheckDataType} from './enum';

export type TabNavParamList = {
  [K in CheckDataType]: {type: CheckDataType};
};

export type StackNavParamList = {
  Account: undefined;
  List: undefined;
};

export type ListCompProps = CompositeScreenProps<
  BottomTabScreenProps<TabNavParamList, CheckDataType>,
  NativeStackScreenProps<StackNavParamList, 'Account'>
>;

export type AccountCompProps = NativeStackScreenProps<
  StackNavParamList,
  'Account'
>;
