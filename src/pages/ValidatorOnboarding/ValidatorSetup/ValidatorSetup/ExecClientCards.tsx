import { Stack, XStack, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import ExecClientCard from './ExecClientCard'
import { EXEC_CLIENTS_ICONS } from '../../../../constants'

const ExecClientCards = () => {
  return (
    <YStack space={'$2'}>
      <Stack style={{ marginTop: '15px', marginLeft: 0, marginBottom: '15px' }}>
        <Text size={27}>Select Execution client</Text>
      </Stack>
      <XStack justifyContent={'space-between'}>
        {Object.entries(EXEC_CLIENTS_ICONS).map(([name, icon], index) => (
          <ExecClientCard key={index} name={name} icon={icon} />
        ))}
      </XStack>
    </YStack>
  )
}

export default ExecClientCards
