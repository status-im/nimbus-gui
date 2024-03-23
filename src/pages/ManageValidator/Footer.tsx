import { Text as TextStat } from '@status-im/components'

import { Text, XStack } from 'tamagui'
import { ExternalIcon } from '@status-im/icons'
import Icon from '../../components/General/Icon'
const Footer = () => {
  return (
    <XStack
      justifyContent="space-between"
      marginLeft="30px"
      padding="10px"
      marginRight="20px"
    >
      <Text
        color="#2F80ED"
        fontSize={15}
        textDecorationColor={'2F80ED'}
        textDecorationLine="underline"
        fontWeight={'500'}
      >
        Learn about Validator penalties
      </Text>
      <XStack space="$5">
        <TextStat size={15} color="#647084">
          Explore validator on beaconchai.in dashboard
        </TextStat>
        <Icon src="icons/beacon-chain.svg" width={22} height={22}></Icon>
        <ExternalIcon size={20} />
      </XStack>
    </XStack>
  )
}
export default Footer
