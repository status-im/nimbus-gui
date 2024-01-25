import { Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import Icon from '../../../../components/General/Icon'
import { useWindowSize } from '../../../../hooks/useWindowSize'

type ConsensusClientCardProps = {
  name: string
  icon: string
}

const ConsensusClientCard = ({ name, icon }: ConsensusClientCardProps) => {
  const windowSize = useWindowSize()
  return (
    <YStack
      style={{
        backgroundColor: '#2A4AF50D',
        border: '1px solid #2A4AF5',
        borderRadius: '16px',
        padding: '12px 16px',
        cursor: 'pointer',
        minWidth: '250px',
        width: windowSize.width < 780 ? '100%' : 'auto',
      }}
      space={'$8'}
    >
      <Stack>
        <Text size={15} weight={'semibold'}>
          {name}
        </Text>
      </Stack>
      <Icon src={icon} width={100} height={100} />
    </YStack>
  )
}

export default ConsensusClientCard
