/**
 * @description: 获取随机数
 * @param {*} num
 */
export const getRandomNumber = (num = 6): string => {
  let res = '';
  for (let i = 0; i < num; i++) {
    res += Math.floor(Math.random() * 10);
  }
  return res;
};
