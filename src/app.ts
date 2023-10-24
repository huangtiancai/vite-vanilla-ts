import { _toFixed } from "./utils";
import {
  reverseString,
  reverseStringChartAt,
  reverseStringRecursion,
  reverseStringCall,
} from "./special/rerverseString";

import { getMaxCount, getMaxCountTwo } from "./special/maxCountString";

// 浮点数计算精度问题
// const res = _toFixed(1239.7686, 2, true, true);
// console.log(_toFixed(0.235, 2, true, true));

// calculationAccuracy();

// 实现字符串逆序输出
console.log(`字符串的逆序输出String-reverse`);
console.log(reverseString("abcd"));
console.log(reverseStringCall("abcd"));
console.log(reverseStringChartAt("abcd"));

let str = "abcd";
let pos = str.length - 1;
let result = "";
console.log(reverseStringRecursion(str, pos, result));

console.log(`输出次数最多的字符及出现的次数`);
console.log(getMaxCount("javascript"));
console.log(getMaxCountTwo("javascript"));
