// Return ascending finite numbers in a new array without changing the caller's input.
export function ordered(values: number[]): number[] {
  return [...values].sort((a, b) => a - b);
}
