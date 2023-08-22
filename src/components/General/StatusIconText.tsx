import { CheckCircleIcon, IncorrectIcon } from '@status-im/icons'
import IconText from './IconText'

type StatusIconTextProps = {
  percentage: number
  threshold: number
  goodText: string
  badText: string
}

const StatusIconText = ({ percentage, threshold, goodText, badText }: StatusIconTextProps) => {
  const isGood = percentage < threshold
  const icon = isGood ? <CheckCircleIcon size={16} /> : <IncorrectIcon size={16} />
  const text = isGood ? goodText : badText

  return <IconText icon={icon}>{text}</IconText>
}

export default StatusIconText
