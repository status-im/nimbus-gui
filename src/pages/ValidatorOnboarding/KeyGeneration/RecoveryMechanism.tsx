import { Text } from '@status-im/components'
import { XStack } from 'tamagui'
import BorderBox from '../../../components/General/BorderBox'

const RecoveryMechanism = () => {
  return (
    <XStack style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
      <Text size={19} weight={'semibold'}>
        Select Recovery Mechanism
      </Text>
      <XStack space={'$2'}>
        <BorderBox>
          <Text size={15} weight={'semibold'}>
            Key Files
          </Text>
        </BorderBox>
        <BorderBox>
          <Text size={15} weight={'semibold'}>
            Recovery Phrase
          </Text>
        </BorderBox>
        <BorderBox>
          <Text size={15} weight={'semibold'}>
            Both Key Files & Recovery Phrase
          </Text>
        </BorderBox>
      </XStack>
    </XStack>
  )
}

export default RecoveryMechanism
