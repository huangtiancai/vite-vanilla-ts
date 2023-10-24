// 将传入的字符串以相反的顺序输出
/**
 * @description 方法1：借助数组reverse()方法
 * @param str
 * @returns string
 */
export function reverseString(str: string) {
  return str.split("").reverse().join("");
}

/**
 * @description 方法2：使用call()
 * @param str
 * @returns
 */
export function reverseStringCall(str: string) {
  let arr = Array.prototype.slice.call(str);
  return arr.reverse().join("");
}

/**
 * @description 方法3：使用字符串的charAt()
 * @param str
 * @returns string
 */
export function reverseStringChartAt(str: string) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str.charAt(i);
  }
  return result;
}

/**
 * @description 方法4：使用递归获取charAt()
 * @param strIn
 * @param pos
 * @param strOut
 * @returns string
 */
export function reverseStringRecursion(
  strIn: string,
  pos: number,
  strOut: string
) {
  if (pos < 0) {
    return strOut;
  }

  strOut += strIn.charAt(pos);
  pos--;

  return reverseStringRecursion(strIn, pos, strOut);
}
