import { Text } from '@status-im/components'
import { Stack, XStack, YStack } from 'tamagui'
import Icon from '../../../components/General/Icon'

const ValidatorBalance = () => {
  return (
    <XStack
      borderWidth="1px"
      borderStyle="solid"
      borderColor={'#DCE0E5'}
      space={'$2'}
      backgroundColor="#2A4AF5"
      borderRadius="$10"
      marginTop="0px"
      marginLeft="30px"
      marginRight="20px"
      marginBottom="30px"
      padding="15px"
      justifyContent="space-between"
    >
      <YStack>
        <XStack space="$1" alignItems="center">
          <Icon src="/icons/diamond.svg" width={10} height={10} />
          <Text size={11} color="#fff">
            Validator 2 Balance
          </Text>
        </XStack>
        <Text size={19} weight={'semibold'} color="#fff">
          0.00 ETH
        </Text>
        <Text size={15} weight={'semibold'} color="#FFFFFFB2">
          $0 USD
        </Text>
      </YStack>
      <Stack marginRight="3rem">
        <Icon src="/icons/suit-guy.png" width={200} height={70}></Icon>
      </Stack>
    </XStack>
  )
}

export default ValidatorBalance
