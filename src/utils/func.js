// 把时间转成小数
export function timeValue(time) {
  let arr = time.split(':');
  return parseInt(arr[0]) + arr[1]/60;
}
