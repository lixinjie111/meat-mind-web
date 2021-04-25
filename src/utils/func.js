// 把时间转成小数
export function timeValue(time) {
  let arr = time.split(':');
  return parseInt(arr[0]) + arr[1] / 60;
}
/**
 * 生成随机数
 * @param min
 * @param max
 * @param precise {Number}精准小数
 * @returns {*}
 */
export function getRandom(min, max, precise) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  if (!precise) {
    return num
  }
  let tmp = Math.random().toFixed(precise);
  return num + Number(tmp)
}