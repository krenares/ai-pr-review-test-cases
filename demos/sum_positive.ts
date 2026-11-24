// Sum positive finite numbers in input order.
export function sumPositive(values: readonly number[]): number {
  return values.filter(value => value > 0).reduce((total, value) => total + value, 0);
}
