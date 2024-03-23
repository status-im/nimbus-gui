import { Stack, YStack } from 'tamagui'
import { Text } from '@status-im/components'

import Icon from '../../../components/General/Icon'

type ValidatorToolCardProps = {
  name: string
  icon: string
}

const ValidatorToolCard = ({ name, icon }: ValidatorToolCardProps) => {
  return (
    <YStack
      style={{
        backgroundColor: '#2A4AF50D',
        border: '1px solid #2A4AF566',
        borderRadius: '16px',
        padding: '12px 16px',
        cursor: 'pointer',
        width: '100%',
        minWidth: '100px',
      }}
      space={'$4'}
      onPress={() => {}}
    >
      <Stack>
        <Text size={19} weight={'semibold'}>
          {name}
        </Text>
      </Stack>
      <Icon src={icon} width={70} height={70} />
    </YStack>
  )
}

export default ValidatorToolCard
