// import {requestGet} from '@/utils';

import type {CheckData, CheckDataType} from '@/types';
import {imageResources} from '@/const/resources';

export function getCheckData({
  type,
  pageSize,
  page,
}: {
  type?: CheckDataType;
  pageSize?: number;
  page?: number;
}): Promise<CheckData> {
  // return requestGet('/api/data', {
  //   type,
  //   pageSize,
  //   page,
  // });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: Object.values(imageResources),
        type,
        pageSize,
        page,
      });
    }, 1000);
  });
}
