import { YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import { RootState } from '../../../../redux/store'
import { DOCUMENTATIONS } from './documentations'
import { MAC } from '../../../../constants'
import OSCards from './OSCards'
import CurrentPlatformOSContent from './CurrentPlatformOSContent'

const ValidatorSetupInstall = () => {
  const [selectedOS, setSelectedOS] = useState(MAC)
  const selectedClient = useSelector((state: RootState) => state.execClient.selectedClient)

  const handleOSCardClick = (os: string) => {
    setSelectedOS(os)
  }

  return (
    <YStack style={{ width: '100%', padding: '26px 32px' }}>
      <Text size={27} weight={'semibold'}>
        Validator Setup
      </Text>
      <YStack
        style={{
          border: '2px solid #1B273D0D',
          borderRadius: '16px',
          padding: '19px 16px',
          marginBottom: '4px',
          marginTop: '10px',
        }}
        space={'$2'}
      >
        <Text size={19}>Installing {selectedClient}</Text>
        <Text size={15} color="#647084" weight={'regular'}>
          {DOCUMENTATIONS[selectedClient].general}
        </Text>
        <OSCards selectedOS={selectedOS} handleOSCardClick={handleOSCardClick} />
        <CurrentPlatformOSContent selectedOS={selectedOS} />
      </YStack>
    </YStack>
  )
}

export default ValidatorSetupInstall
