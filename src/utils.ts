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

const isDef = (val: unknown) => {
  return val !== void 0 && val !== null;
};
const isObject = (val: unknown) => {
  return val !== null && typeof val === 'object';
};

/**
 * @description: 通用深拷贝方法
 * @param {any} obj 需要拷贝的对象
 * @return {*}
 */
export const deepClone = (obj: any): any => {
  if (!isDef(obj)) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item: any) => deepClone(item));
  }
  if (isObject(obj)) {
    const to: Record<string, any> = {};
    Object.keys(obj).forEach((key: any) => {
      to[key] = deepClone(obj[key]);
    });
    return to;
  }
  return obj;
};
