/**
 * 输出次数最多的字符及出现的次数
 * 注意：
 * 1、 次数最多的字符多个的情况
 * 2. 字符串为空等情况
 */
/**
 * @description key-value
 * @param str
 * @returns string
 */
export function getMaxCount(str: string) {
  // 给对象添加一个类型注解
  let json: { [key: string]: number } = {};
  for (let i = 0; i < str.length; i++) {
    // 如果获取的字符在json里面，次数+1,否则新增一个key,value是1
    if (!json[str.charAt(i)]) {
      json[str.charAt(i)] = 1; // 添加对象属性
    } else {
      json[str.charAt(i)]++;
    }
  }

  console.log(json);

  // 获取次数最多的字符，以及出现的次数
  let maxCountChar = "";
  let maxCount = 0;
  // 遍历对象的key
  for (let key in json) {
    if (json[key] > maxCount) {
      maxCount = json[key];
      maxCountChar = key;
    }
  }
  // 返回出现次数最多的字符
  return "出现次数最多的字符为" + maxCountChar + "，出现的次数为" + maxCount;
}

/**
 * @description
 *  1. 字符串处理成一个数组，调用sort()排序，再转变成字符串
 *  2. 遍历每隔字符，调用lastIndexOf()方法
 *  3. 与最大次数比较maxCount进行比较，如果比maxCOunt大，就更新maxCount,否则继续
 * @param str
 * @returns string
 */
export function getMaxCountTwo(str: string) {
  let maxCountChar = "";
  let maxCount = 0;
  str = str.split("").sort().join("");
  for (let i = 0, j = str.length; i < j; i++) {
    let char = str.charAt(i);
    let charCount = str.lastIndexOf(char) - i + 1;
    if (charCount > maxCount) {
      maxCount = charCount;
      maxCountChar = char;
    }
    i = str.lastIndexOf(char);
  }

  return "出现次数最多的字符为" + maxCountChar + "，出现的次数为" + maxCount;
}

export function getMaxCountThree(str: string) {
  let maxCountChar = "";
  let maxCount = 0;
  str = str.split("").sort().join("");
  let arr = str.match(/(\w)\1+/g);
  console.log(arr);
  // 非空断言，即确认 `arr` 不为 `null` 或 `undefined`
  for (let i = 0; i < arr!.length; i++) {
    let length = arr![i].length;
    console.log(length);
    if (length > maxCount) {
      maxCount = length;
      maxCountChar = arr![i][0];
    }
  }

  return "出现次数最多的字符为" + maxCountChar + "，出现的次数为" + maxCount;
}
