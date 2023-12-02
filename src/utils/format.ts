import {CheckDataRowInfo} from '@/types';

function toTwo(time: number): string {
  return (time + '').padStart(2, '0');
}
function formatTime(timeData: string) {
  const time = new Date(+new Date(timeData));
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDay() || '天';
  const date = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  return `${year}/${toTwo(month)}/${toTwo(date)}/星期${day} - ${toTwo(
    hour,
  )}:${toTwo(minute)}:${toTwo(second)}`;
}
export function formatData(obj: CheckDataRowInfo) {
  const strArr = [];
  for (const key in obj) {
    let val = obj[key as keyof CheckDataRowInfo];
    if (key === 'updatedAt' || key === 'createdAt') {
      val = formatTime(val);
    }
    strArr.push({key, val});
  }
  return strArr;
}
