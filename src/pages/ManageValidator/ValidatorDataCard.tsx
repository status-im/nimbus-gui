import { Text } from '@status-im/components'
import { XStack, YStack } from 'tamagui'
import Icon from '../../components/General/Icon'

type ValidatorDataCardProps = {
  title: string
  value: number
  iconPath: string
  isFractionResult?: boolean
  fractionValue?: number
}

const ValidatorDataCard = ({
  title,
  value,
  iconPath,
  isFractionResult,
  fractionValue,
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
        {isFractionResult ? (
          <XStack space="$2">
            <Text size={19} weight={'semibold'}>
              {fractionValue}
            </Text>
            <Text size={19} weight={'semibold'} color="#7F7F7F">
              / {value}
            </Text>
          </XStack>
        ) : (
          <Text size={19} weight={'semibold'}>
            {value}
          </Text>
        )}
      </YStack>
    </XStack>
  )
}

export default ValidatorDataCard
