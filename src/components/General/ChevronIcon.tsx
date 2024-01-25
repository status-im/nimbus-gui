import { ChevronDownIcon, ChevronTopIcon } from '@status-im/icons'

type ChevronIconProps = {
  isOpen: boolean
}

const ChevronIcon = ({ isOpen }: ChevronIconProps) => {
  if (isOpen) {
    return <ChevronTopIcon size={16} color={'#919191'} />
  } else {
    return <ChevronDownIcon size={16} color={'#919191'} />
  }
}

export default ChevronIcon
