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
export function assertUnreachable(value: never): never {
  throw new Error(`Unreachable case: ${value}`)
}

export const convertSecondsToTimerFormat = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
}

export const formatNumberForGauge = (n: number): string => {
  return n.toString().replace(/\./g, ',')
}

export const getFormattedValidatorAddress = (address: string) => {
  // zQ3asdf9d4Gs0 -> zQ3...9d4Gs0
  const start = address.slice(0, 3)
  const end = address.slice(-6)
  return `${start}...${end}`
}
