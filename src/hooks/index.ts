import {useState, useEffect} from 'react';
import {STORE_KEY} from '@/const';
import {setStoreData, getStoreData} from '@/utils';

export const useSystemData = <T extends object>(
  initData: T,
): [T, (data: T) => Promise<void | Error>, () => void] => {
  const [_sysData, _setSysData] = useState<T>(initData);

  const setSystemData = (data: T) => {
    _setSysData(data);
    return setStoreData<T>(STORE_KEY, data);
  };

  const updateForce = () => {
    getStoreData<T>(STORE_KEY).then(systemData => {
      _setSysData(systemData);
    });
  };

  useEffect(() => {
    getStoreData<T>(STORE_KEY).then(systemData => {
      _setSysData(systemData);
    });
  }, []);

  return [_sysData, setSystemData, updateForce];
};
