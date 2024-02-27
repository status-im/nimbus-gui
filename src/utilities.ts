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
  return `${String(minutes).padStart(2, '0')}:${String(
    remainingSeconds,
  ).padStart(2, '0')}`
}

export const formatNumbersWithComa = (n: number): string => {
  const parts = n.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

export const getMonthIndicesFromRange = (range: DateRange) => {
  if (!range.from || !range.to) return [0, 11]

  return [range.from.getMonth(), range.to.getMonth()]
}

export const getFormattedValidatorAddress = (address: string) => {
  // zQ3asdf9d4Gs0 -> zQ3...9d4Gs0
  const start = address.slice(0, 3)
  const end = address.slice(-6)
  return `${start}...${end}`
}

export const getFormattedWalletAddress = (address: string) => {
  // 0xb9dasdfc35 -> 0xb9d...c35
  return `${address.slice(0, 5)}...${address.slice(-3)}`
}

export const formatToFixed4 = (value: string) => {
  const decimalPart = value.split('.')[1]
  const decimalLength = decimalPart ? decimalPart.length : 0

  if (decimalLength > 4) {
    return Number(value).toFixed(4)
  }
  return value
}

export const getHeightPercentages = (amountOfElements: number) => {
  let percentages = 100

  if (amountOfElements > 1) {
    percentages = 100 / amountOfElements
  }

  return `${percentages}%`
}

export const isAddressValid = (address: string) => {
  return address.length > 0
}

export const isPortValid = (port: string) => {
  if (port.length === 0) {
    return false
  }

  return !isNaN(Number(port))
}

export const copyFunction = (text: string) => {
  navigator.clipboard.writeText(text)
}

export const getDepositTitle = ({
  isChainParity,
  isTransactionConfirmation,
}: {
  isChainParity: boolean
  isTransactionConfirmation: boolean
}) => {
  if (isChainParity) {
    return 'Activate Validators'
  } else if (isTransactionConfirmation) {
    return 'Transaction Confirmation'
  } else {
    return 'Deposit Funds'
  }
}
