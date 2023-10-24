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

// 统一export
// export {  getCurrentTime, isEmpty }
