import { XStack } from 'tamagui'

import OSCard from './OSCard'
import { LINUX, MAC, WINDOWS } from '../../../../constants'

const cards = [
  {
    name: MAC,
    icon: '/icons/apple-logo.svg',
  },
  {
    name: LINUX,
    icon: '/icons/linux-logo.svg',
  },
  {
    name: WINDOWS,
    icon: '/icons/windows-logo.svg',
  },
]

type OSCardsProps = {
  selectedOS: string
  handleOSCardClick: (os: string) => void
}

const OSCards = ({ selectedOS, handleOSCardClick }: OSCardsProps) => {
  return (
    <XStack justifyContent={'space-between'} my={'15px'}>
      {cards.map(card => (
        <OSCard
          key={card.name}
          icon={card.icon}
          name={card.name}
          isSelected={selectedOS === card.name}
          onClick={() => handleOSCardClick(card.name)}
        />
      ))}
    </XStack>
  )
}

export default OSCards
