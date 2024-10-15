/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number,
  maxWait?: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | null;
  let lastInvokeTime = Date.now();

  return function (this: any, ...args: Parameters<T>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const now = Date.now();

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const invokeFunc = () => {
      lastInvokeTime = Date.now();
      func.apply(context, args);
    };
    if (maxWait && now - lastInvokeTime >= maxWait) {
      invokeFunc();
    } else {
      timeoutId = setTimeout(invokeFunc, delay);
    }
  };
};
