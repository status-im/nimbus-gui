import { XStack } from 'tamagui'
import { useState } from 'react'

import OSCard from './OSCard'
import { LINUX, MAC, WINDOWS } from '../../../../constants'

const OSCards = () => {
  const [selectedOs, setSelectedOs] = useState(MAC)

  return (
    <XStack justifyContent={'space-between'} my={'15px'}>
      <OSCard
        icon="/icons/apple-logo.svg"
        name="MacOS"
        isSelected={selectedOs === MAC}
        onClick={() => setSelectedOs(MAC)}
      />
      <OSCard
        icon="/icons/linux-logo.svg"
        name={LINUX}
        isSelected={selectedOs === LINUX}
        onClick={() => setSelectedOs(LINUX)}
      />
      <OSCard
        icon="/icons/windows-logo.svg"
        name={WINDOWS}
        isSelected={selectedOs === WINDOWS}
        onClick={() => setSelectedOs(WINDOWS)}
      />
    </XStack>
  )
}

export default OSCards
