import { round, add, subtract, multiply, divide } from "lodash-es";

/**
 * @description: 获取当前时间
 * @param Date
 */
export function getCurrentTime(date: Date) {
  console.log(`当前时间为：${date.toDateString()}`);
}

/**
 * @description: 非空判断
 * @param
 */
export function isEmpty(value: any) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}

// 参考：https://blog.csdn.net/m0_47670683/article/details/124025972
// 函数和转类型
export function isValidKey(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return key in object;
}

/**
 * @description: 判断一个对象下是否有空属性
 * @param Object
 * @example detectObject({ a: 1, b: 2, c: "" })
 */
export function detectObject(object: Object) {
  for (const key in object) {
    if (isValidKey(key, object)) {
      if (object.hasOwnProperty(key)) {
        if (isEmpty(object[key])) {
          return true;
        }
      }
    }
  }
}

/**
 * @description 计算两个数的差的绝对值
 * @param a number
 * @param b number
 * @returns number
 */
export function difference(a: number, b: number) {
  return Math.abs(a - b);
}

// 11239.7686
// 1239.7

/**
 * 把Number四舍五入为指定小数位数的数字字符串（解决原toFixed四舍五入问题）
 * @param {number} [len=0] 保留小数位数
 * @param {boolean} [round=true] 是否四舍五入（默认进行四舍五入）
 * @param {boolean} [padding=true] 有效数字不足预设小数位数时是否后补0（默认后补）如：_toFixed(1.1,3,true,true) = "1.100"  ;   _toFixed(1.1,3,true,false) = "1.1"
 * @returns {string}
 * @example _toFixed(1239.7686,, 2, true, true);
 */
export function _toFixed(
  num: number,
  len: number,
  round: boolean,
  padding: boolean
) {
  if (Number(num) < 0) {
    throw new RangeError("digits argument must be between 0 and 100");
  }

  let numStr = num.toString(),
    pointIndex = numStr.indexOf("."), // 小数点下标
    preNumIndex = pointIndex + len + 1; // 保留位后一位数字下标

  // 4，7  4+2+1=7
  // console.log(pointIndex, preNumIndex, numStr.length);

  // 隐式类型转换(==)
  if (numStr.includes("e") || pointIndex === -1) {
    // 遇到科学表示法或整数，直接返回原生toFixed处理结果
    return num.toFixed(len);
  }

  // 需补0的个数: 传入的需要保留的小数位 - 实际小数位
  // 2 - (9 - 4 - 1) = 2 - 4 = -2  减位
  // 2 - (6 - 4 - 1) = 2 - 1 = 1   补位
  let addZeroCount = len - (numStr.length - pointIndex - 1);
  if (addZeroCount > 0) {
    numStr += "0".repeat(addZeroCount);
  }

  let numCut = Math.abs(Number(numStr.substring(0, preNumIndex)));
  console.log(`numCut`, numCut, Object.prototype.toString.call(numCut)); // 1239.7686
  // 处理四舍五入
  // 1239.766 + 1 / Math(10, 2) = 1239.76 + 0.01 = 1239.77
  // toFixed ?
  let res =
    (num < 0 ? "-" : "") +
    (round && Number(numStr[preNumIndex]) >= 5
      ? numCut + 1 / Math.pow(10, len)
      : numCut
    ).toFixed(len); // 判断预期小数位后一位是否大于等于5，是则进位

  return padding ? res : Number(res).toString();
}

/**
 * @description 浮点数计算精度问题
 */
export function calculationAccuracy() {
  console.log(`round(0.2356, 2)`, round(0.2356, 2));
  console.log(`0.30000000000000004`, round(0.30000000000000004, 2));

  // 加减乘除
  console.log("加减乘除");
  console.log(0.1 + 0.2);
  console.log(add(0.1, 0.2));
}

