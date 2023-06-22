
type Func<T> = (...args: any[]) => T;

function memoizer<T>(func: Func<T>): Func<T> {
  let cache: { [key: string]: T } = {};

  return function (...args: any[]): T {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log('Fetching from cache');
      return cache[key];
    }

    console.log('Calculating the result');
    let result = func.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const multiply = memoizer((...args: number[]): number => {
  console.log('Calculating the value...');
  return args.reduce((acc, val) => acc * val, 1);
});

console.log(multiply(2, 5, 6))
console.log(multiply(2, 5, 6))
console.log(multiply(2, 2, 2))


