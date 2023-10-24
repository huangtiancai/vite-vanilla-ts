import { debounce, throttle } from "lodash-es";

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

// 防抖
export function setupDebounceCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  const handleThrottle = debounce((count: number) => {
    // 执行逻辑
    setCounter(count + 1);
  }, 1000);

  element.addEventListener("click", () => handleThrottle(counter)); // 执行防抖、节流时，计时器counter先不进行运算
  setCounter(0);
}

// 节流
export function setupThrottleCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  const handleThrottle = throttle((count: number) => {
    // 执行逻辑
    setCounter(count + 1);
  }, 1000);

  element.addEventListener("click", () => handleThrottle(counter));
  setCounter(0);
}
