import { Text } from '@status-im/components'
import { YStack } from 'tamagui'

import Icon from '../../../components/General/Icon'

const DefaultPanel = () => {
  return (
    <YStack
      space={'$2'}
      width={'100%'}
      height={'100vh'}
      justifyContent="center"
      alignItems="center"
    >
      <Icon src="/icons/cat-in-box.png" height={100} width={100} />
      <Text size={15} weight={'semibold'}>
        Manage your Validator
      </Text>
      <Text size={15}>
        This panel will give you additional settings to manage your vaidator
      </Text>
    </YStack>
  )
}

export default DefaultPanel
