/**
 * Adds two numbers together.
 * @param firstNumber First number to add
 * @param secondNumber Second number to add
 * @returns Sum of firstNumber and secondNumber
 * @example add(2, 3) // 5
 */
export function add(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}

/**
 * Main application function that adds two numbers using the add function.
 * @param firstNumber First number to add
 * @param secondNumber Second number to add
 * @returns Sum of firstNumber and secondNumber via add function
 * @example app(1, 2) // 3
 */
export function app(firstNumber: number, secondNumber: number): number {
  return add(firstNumber, secondNumber);
}
