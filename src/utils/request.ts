import queryString from 'query-string';

// 加个随机数清除 ReactNativefetch 缓存
export function requestGet(url: string, data?: Partial<RequestData>) {
  if (data) {
    Object.assign(data, {random: Date.now()});
  } else {
    data = {random: Date.now()};
  }
  url = `${url}?${queryString.stringify(data)}`;
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
}

export function requestPost(url: string, data?: Partial<RequestData>) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data || {}),
  }).then(response => response.json());
}
