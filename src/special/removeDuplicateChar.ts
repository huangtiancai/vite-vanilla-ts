/**
 * indexOf
 * @param str
 */
export function removeDuplicateChar(str: string) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (result.indexOf(char) === -1) {
      result += char;
    }
  }
  return result;
}

/**
 * key-value
 * @param str
 */
export function removeDuplicateCharTwo(str: string) {
  let result: any = [];
  let json: { [key: string]: any } = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!json[char]) {
      result.push(char);
      json[char] = true;
    }
  }

  return result.join("");
}
