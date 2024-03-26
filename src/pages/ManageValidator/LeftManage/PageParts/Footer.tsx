import { Text as TextStat } from '@status-im/components'
import { ExternalIcon } from '@status-im/icons'
import { Text, XStack } from 'tamagui'

import Icon from '../../../../components/General/Icon'

const Footer = () => {
  return (
    <XStack justifyContent="space-between">
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
