// Return ascending finite numbers in a new array without changing the caller's input.
export function ordered(values: number[]): number[] {
  const ascending = (a: number, b: number): number => a - b;
  return [...values].sort(ascending);
}
