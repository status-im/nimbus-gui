import { XStack } from 'tamagui'
import { useState } from 'react'

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

const OSCards = () => {
  const [selectedOs, setSelectedOs] = useState(MAC)

  const handleOsCardClick = (os: string) => {
    setSelectedOs(os)
  }

  return (
    <XStack justifyContent={'space-between'} my={'15px'}>
      {cards.map(card => (
        <OSCard
          key={card.name}
          icon={card.icon}
          name={card.name}
          isSelected={selectedOs === card.name}
          onClick={() => handleOsCardClick(card.name)}
        />
      ))}
    </XStack>
  )
}

export default OSCards
