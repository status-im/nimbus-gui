import { XStack } from 'tamagui'
import Icon from '../General/Icon'
import Tag from '../General/Tag'
import { Text } from '@status-im/components'

const NodesLogo = () => {
  return (
    <XStack
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      space={'$2'}
    >
      <Icon src={'src/assets/nodes-app-icon.png'} width={32} height={32} />
      <Text size={27} weight={'semibold'}>
        nodes
      </Text>
      <Tag text="BETA" />
    </XStack>
  )
}

export default NodesLogo
