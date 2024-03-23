import { XStack, YStack } from 'tamagui'
import ValidatorNameAddress from '../../components/General/ValidatorNameAddress'
import { Avatar, Text } from '@status-im/components'
import { ChevronLeftIcon, ChevronRightIcon } from '@status-im/icons'
import Icon from '../../components/General/Icon'
const ValidatorInfo = () => {
  return (
    <XStack space={'$2'} padding="30px" justifyContent="space-between">
      <XStack space="$2">
        <Avatar
          type="user"
          size={80}
          src="/icons/validator-request.svg"
          name={'22'}
          indicator="online"
        />
        <ValidatorNameAddress
          name={'2'}
          address={'safsff2f2faasfasf3afe2fefsaedfsa'}
        />
      </XStack>
      <XStack space="$5">
        <YStack>
          <Text size={13} color="#333333" weight={'semibold'}>
            Average Effectiveness
          </Text>
          <Text size={19} weight={'semibold'}>
            100%
          </Text>
        </YStack>
        <YStack>
          <Text size={13} color="#333333" weight={'semibold'}>
            Validator Income
          </Text>
          <YStack>
            <Text size={19} weight={'semibold'}>
              0 ETH
            </Text>
            <XStack space="$2">
              <Text size={15} weight={'semibold'}>
                Day
              </Text>
              <Icon src="icons/cross.svg" height={13} width={13}></Icon>
            </XStack>
          </YStack>
        </YStack>
        <XStack>
          <ChevronLeftIcon size={16} />
          <ChevronRightIcon size={16} />
        </XStack>
      </XStack>
    </XStack>
  )
}

export default ValidatorInfo
