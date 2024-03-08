import { Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'
import Icon from '../../../components/General/Icon'

type ValidatorDataCardProps = {
  title: string
  value: string
  iconPath: string
}

const ValidatorDataCard = ({
  title,
  value,
  iconPath,
}: ValidatorDataCardProps) => {
  return (
    <XStack
      style={{
        border: '0.5px solid #DCE0E5',
        flexGrow: '1',
        borderRadius: '16px',
        padding: '10px',
        alignContent: 'center',
        alignItems: 'center',
      }}
      space="$3"
    >
      <Icon src={`/icons/${iconPath}`} width={35} height={35}></Icon>
      <YStack>
        <Text size={13} weight={'semibold'} color="#647084">
          {title}
        </Text>
        <Text size={19} weight={'semibold'}>
          {value}
        </Text>
      </YStack>
    </XStack>
  )
}

export default ValidatorDataCard
