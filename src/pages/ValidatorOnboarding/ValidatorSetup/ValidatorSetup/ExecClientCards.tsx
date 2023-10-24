import { Stack, XStack, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import ExecClientCard from './ExecClientCard'
import { DOCUMENTATION } from '../ValidatorInstalling/documentions'

const ExecClientCards = () => {
  return (
    <YStack space={'$2'}>
      <Stack style={{ marginTop: '15px', marginLeft: 0, marginBottom: '15px' }}>
        <Text size={27}>Select Execution client</Text>
      </Stack>
      <XStack justifyContent={'space-between'}>
        {Object.entries(DOCUMENTATION).map(([name, { icon }], index) => (
          <ExecClientCard key={index} name={name} icon={icon} />
        ))}
      </XStack>
    </YStack>
  )
}

export default ExecClientCards
