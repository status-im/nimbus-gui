import { Stack, XStack, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import ExecClientCard from './ExecClientCard'
import { DOCUMENTATIONS } from '../ValidatorInstalling/documentations'

const ExecClientCards = () => {
  return (
    <YStack space={'$2'}>
      <Stack style={{ marginTop: '15px', marginLeft: 0, marginBottom: '15px' }}>
        <Text size={27}>Select Execution client</Text>
      </Stack>
      <Stack
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '8px',
        }}
      >
        {Object.entries(DOCUMENTATIONS).map(([name, { icon }], index) => (
          <ExecClientCard key={index} name={name} icon={icon} />
        ))}
      </Stack>
    </YStack>
  )
}

export default ExecClientCards
