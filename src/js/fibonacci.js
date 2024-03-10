export function getFibonacciNumber(number) {
  const fibonacciSeries = [0, 1];
  while (fibonacciSeries.length !== number) {
    const nextFibonacci = fibonacciSeries.at(-2) + fibonacciSeries.at(-1);
    fibonacciSeries.push(nextFibonacci);
  }
  return fibonacciSeries[number - 1];
}
