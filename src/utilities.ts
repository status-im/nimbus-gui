/**
 * Asserts that a case in a switch statement is unreachable.
 *
 * @example
 * // Exhaustively checks `user.role` type ("admin" | "user") and will not compile
 * // if a new role is added without adding a case to the switch statement.
 * switch (user.role) {
 *    case "admin":
 *       break;
 *    case "user":
 *      break;
 *    default:
 *      assertUnreachable(user.role);
 * }
 */
import { DateRange } from 'react-day-picker'

export function assertUnreachable(value: never): never {
  throw new Error(`Unreachable case: ${value}`)
}

export const convertSecondsToTimerFormat = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
}

export const formatNumbersWithComa = (n: number): string => {
  const parts = n.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export const getMonthIndicesFromRange = (range: DateRange) => {
  if (!range.from || !range.to) return [0, 11]

  return [range.from.getMonth(), range.to.getMonth()]
}