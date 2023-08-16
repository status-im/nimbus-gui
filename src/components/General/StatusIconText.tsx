import { GREEN_CHECKMARK_ICON, RED_CHECKMARK_ICON } from '../../constants'
import IconText from './IconText'

type StatusIconTextProps = {
  percentage: number
  threshold: number
  goodText: string
  badText: string
}

const StatusIconText = ({ percentage, threshold, goodText, badText }: StatusIconTextProps) => {
  const isGood = percentage < threshold
  const icon = isGood ? GREEN_CHECKMARK_ICON : RED_CHECKMARK_ICON
  const text = isGood ? goodText : badText

  return <IconText icon={icon}>{text}</IconText>
}

export default StatusIconText
