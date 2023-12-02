declare module 'react-native-vector-icons/Ionicons';

declare type RequestDataValue = string | number | undefined;

type RequestData = Record<string, RequestDataValue>;

type InfoSysData = {
  [K in CheckDataType]: string;
};

type SystemData<T extends object> = {
  [K in keyof T]+?: T[K];
};
